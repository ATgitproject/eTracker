"use client";

import { useCallback, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Controller, FormProvider } from "react-hook-form";
import ButtonComponent from "../controls/Button/ButtonComponent";
import componentRegistry from "../../config/componentRegistry";
import { TOOLBAR_ICONS } from "../controls/TableComponent/utils/TableUtils";
import useFormHook from "../shared/hooks/useFormHook";
import { useDispatch } from "react-redux";
import { setUpdateFormData } from "@/redux/slices/formDataSlice";
import { debounce } from "lodash";
import getRules from "../shared/validation/formValidation";

const PageRenderer = ({
  page,
  showPageComponent,
  onSave,
  overWritesCallBack,
  sourceOnChange,
  useForm: sourceUseForm,
}) => {
  const dispatch = useDispatch();
  const { useForm: formMethods } = useFormHook({
    source: {
      useForm: sourceUseForm,
      action: "add",
    },
  });
  const { control, getValues, handleSubmit } = formMethods;
  const [pageToolbars, setPageToolbars] = useState([]);

  if (!page) {
    return null;
  }

  const { title, description, components = [], entity_name } = page;

  const handleStoredUpdateValue = ({ entitiy_field_name, newValue }) => {
    dispatch(
      setUpdateFormData({
        entity_name: entity_name,
        [entity_name]: { [entitiy_field_name]: newValue },
      }),
    );
  };

  const debouncedHandleStoredUpdateValue = useCallback(
    debounce(handleStoredUpdateValue, 400),
    [],
  );

  const renderComponent = (component) => {
    if (!component) {
      return null;
    }

    const Component = componentRegistry?.[component.field_type];

    if (!Component) {
      return null;
    }

    const {
      id,
      field_id,
      entitiy_field_name,
      defaultValue,
      field_type,
      type,
      width,
    } = component;

    const fieldName = entitiy_field_name || field_id || id;
    const componentKey = field_id || id || entitiy_field_name;
    const rules = getRules(component);

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
        <Controller
          name={fieldName}
          control={control}
          rules={rules}
          defaultValue={defaultValue ?? ""}
          render={({ field, fieldState }) => {
            const onChange = (event) => {
              const newValue = event?.target
                ? event.target.type === "checkbox"
                  ? event.target.checked
                  : event.target.value
                : event;
              field.onChange(newValue);
              ["Textfieldcomponent", "TextareaComponent"].includes(field_type)
                ? debouncedHandleStoredUpdateValue({
                    entitiy_field_name,
                    newValue,
                  })
                : handleStoredUpdateValue({
                    entitiy_field_name,
                    newValue,
                  });

              if (overWritesCallBack?.onChange) {
                overWritesCallBack.onChange(field.onChange, getValues);
              } else if (overWritesCallBack?.beforeOnChange) {
                overWritesCallBack.beforeOnChange(
                  event,
                  field.onChange,
                  overWritesCallBack?.beforeOnChangeHandler,
                );
              }

              sourceOnChange?.({
                e: event,
                controlType: field_type,
                entitiy_field_name: fieldName,
                entity_name,
                useForm: formMethods,
              });
            };

            return (
              <Box>
                <Component
                  {...componentProps}
                  name={fieldName}
                  value={field.value || ""}
                  onChange={onChange}
                  onBlur={field.onBlur}
                  field={field}
                />
                {Boolean(fieldState.error) ? (
                  <div
                    style={{ position: "relative" }}
                    className="error-message-container"
                  >
                    <div className="error-message">
                      {fieldState.error?.message || null}
                    </div>
                  </div>
                ) : null}
              </Box>
            );
          }}
        />
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
                {pageToolbars.map(renderPageToolbar)}
              </Box>
            )}
          </Box>
        )}
        <Grid container spacing={2} className="page-renderer__content">
          {components.map(renderComponent)}
        </Grid>
      </div>
    </FormProvider>
  );
};

export default PageRenderer;
