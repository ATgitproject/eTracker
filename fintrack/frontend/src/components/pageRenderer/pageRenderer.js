"use client";

import { useCallback, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Controller, FormProvider } from "react-hook-form";
import ButtonComponent from "../controls/ButtonComponent";
import componentRegistry from "../../config/componentRegistry";
import { TOOLBAR_ICONS } from "../controls/TableComponent/utils/TableUtils";
import useFormHook from "../shared/hooks/useFormHook";
import { useDispatch } from "react-redux";
import { setUpdateFormData } from "@/redux/slices/formDataSlice";
import { debounce } from "lodash";
import getRules from "../shared/validation/formValidation";
import { ConditionValidator } from "../shared/validation/conditionValidator";

const FORM_FIELD_TYPES = new Set([
  "textfield",
  "checkbox",
  "toggleComponent",
  "segmentButtonComponent",
  "datePickerComponent",
  "dropdownComponent",
  "photoUploadComponent",
  "documentUploadComponent",
  "iconComponent",
  "colorSelectComponent",
]);
const EMPTY_COMPONENTS = [];

const PageRenderer = ({
  page,
  showPageComponent,
  onSave,
  overWritesCallBack,
  sourceOnChange,
  useForm: sourceUseForm,
}) => {
  const dispatch = useDispatch();
  const { updateDependentFields, setDefaultValue } = ConditionValidator();
  const { useForm: formMethods } = useFormHook({
    source: {
      useForm: sourceUseForm,
      action: "add",
    },
  });
  const { control, getValues, handleSubmit } = formMethods;
  const [pageToolbars, setPageToolbars] = useState([]);
  const components = page?.components ?? EMPTY_COMPONENTS;
  const [jsonSource, setJsonSource] = useState(components);

  if (!page) {
    return null;
  }

  const { title, description, entity_name } = page;

  const handleStoredUpdateValue = ({ entity_field_name, newValue }) => {
    if (entity_field_name) {
      dispatch(
        setUpdateFormData({
          entity_name: entity_name,
          [entity_name]: { [entity_field_name]: newValue },
        }),
      );
    }
  };

  const debouncedHandleStoredUpdateValue = useCallback(
    debounce(handleStoredUpdateValue, 400),
    [],
  );

  const handleDependencyChange = (fieldName, newValue, hasDependentField) => {
    if (!hasDependentField) {
      return null;
    }
    const updatedJsonSource = updateDependentFields({
      jsonSource,
      fieldName,
      newValue,
      useForm: formMethods,
      entity_name,
    });
    setJsonSource(updatedJsonSource);
  };

  const renderComponent = (component) => {
    if (!component || component?.hidden) {
      return null;
    }

    const componentType = component.field_type || component.type;
    const Component = componentRegistry?.[componentType];

    if (!Component) {
      return null;
    }

    const {
      id,
      field_id,
      entity_field_name,
      defaultValue,
      field_type,
      type,
      width,
      hasDependentField,
    } = component;

    const fieldName = entity_field_name || field_id || id;
    const componentKey = field_id || id || entity_field_name;
    const rules = getRules(component);
    const isFormField =
      FORM_FIELD_TYPES.has(componentType) &&
      typeof fieldName === "string" &&
      fieldName.length > 0;

    const componentProps = {
      ...component,
      showPageComponent,
      onPageToolbarChange: setPageToolbars,
    };

    const children = componentProps?.children;

    if (children !== undefined) {
      componentProps.children = Array.isArray(children)
        ? children.map((child) =>
            child && typeof child === "object" ? renderComponent(child) : child,
          )
        : children;
    }

    return (
      <Grid
        key={componentKey}
        item
        size={{
          sm: width || 12,
          md: width || 12,
          lg: width || 12,
        }}
      >
        {isFormField ? (
          <Controller
            name={fieldName}
            control={control}
            rules={rules}
            defaultValue={
              defaultValue
                ? setDefaultValue({
                    useForm: formMethods,
                    entity_name,
                    entity_field_name: fieldName,
                    newValue: defaultValue,
                  })
                : ""
            }
            render={({ field, fieldState }) => {
              const onChange = (event) => {
                const value = event?.target
                  ? event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value
                  : event;
                const newValue = type === "number" ? Number(value) : value;
                field.onChange(newValue);
                ["Textfieldcomponent", "TextareaComponent"].includes(field_type)
                  ? debouncedHandleStoredUpdateValue({
                      entity_field_name,
                      newValue,
                    })
                  : handleStoredUpdateValue({
                      entity_field_name,
                      newValue,
                    });
                handleDependencyChange(fieldName, newValue, hasDependentField);
              };

              return (
                <Box>
                  <Component
                    {...componentProps}
                    name={fieldName}
                    value={field?.value ?? ""}
                    onChange={onChange}
                    onBlur={field.onBlur}
                    field={field}
                  />
                  {fieldState.error && (
                    <div className="error-message-container">
                      <div className="error-message">
                        {fieldState.error.message}
                      </div>
                    </div>
                  )}
                </Box>
              );
            }}
          />
        ) : (
          <Component {...componentProps} />
        )}
      </Grid>
    );
  };

  const renderPageToolbar = (toolbar) => {
    if (!toolbar) {
      return null;
    }

    const action = toolbar.toolbar_action ?? toolbar.TOOLBAR_ACTION;
    const Icon = TOOLBAR_ICONS?.[action];
    const panelType = toolbar.panel_type ?? toolbar.PANEL_TYPE ?? "dialog";
    const width = toolbar.width ?? toolbar.WIDTH ?? "md";
    const componentPath = toolbar.component_path ?? toolbar.COMPONENT_PATH;
    const toolbarId = toolbar.toolbar_id ?? toolbar.TOOLBAR_ID;
    const toolbarName = toolbar.toolbar_name ?? toolbar.TOOLBAR_NAME;

    return (
      <ButtonComponent
        key={toolbarId}
        variant="contained"
        variant="primary"
        fullWidth={false}
        startIcon={Icon ? <Icon /> : null}
        onClick={() =>
          showPageComponent?.({
            componentPath,
            panelType,
            width,
            toolbar,
            selectedRows: [],
          })
        }
      >
        {toolbarName}
      </ButtonComponent>
    );
  };

  return (
    <FormProvider {...formMethods}>
      <div className="page-renderer">
        {(title || description || pageToolbars.length > 0) && (
          <Box className="page-renderer__header">
            <Box className="page-renderer__header-content">
              {title && <h1 className="page-renderer__title">{title}</h1>}

              {description && (
                <p className="page-renderer__description">{description}</p>
              )}
            </Box>

            {pageToolbars.length > 0 && (
              <Box className="page-renderer__actions">
                {pageToolbars?.map(renderPageToolbar)}
              </Box>
            )}
          </Box>
        )}
        <Grid container spacing={2} className="page-renderer__content">
          {jsonSource?.map(renderComponent)}
        </Grid>
      </div>
    </FormProvider>
  );
};

export default PageRenderer;
