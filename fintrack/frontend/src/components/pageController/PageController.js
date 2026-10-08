"use client";

import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PagePanelController from "./PagePanelController";
import dynamicComponentImport from "../dynamicRenderController/dynamicComponentImport";
import PageRenderer from "../pageRenderer/pageRenderer";
import useFormApi from "../shared/hooks/useFormApi";
import { getPageAction } from "../../utils/genericUtils";
import { setFormData, setUpdateFormData } from "@/redux/slices/formDataSlice";
import { useDispatch } from "react-redux";

const PageController = ({ page }) => {
  const dispatch = useDispatch();
  const [panel, setPanel] = useState(null);
  const formMethods = useForm({ mode: "all" });
  const entityName = panel?.props?.toolbar?.entity_name || page?.entity_name;
  const recordId = panel?.props?.row?.id ?? panel?.props?.row;
  const { getData, saveData, isLoading, error } = useFormApi({
    entityName,
    action: panel?.action,
    recordId,
    formMethods,
  });

  const onClose = useCallback(() => {
    dispatch(setUpdateFormData({ [entityName]: {} }));
    dispatch(setFormData({ [entityName]: {} }));
    formMethods?.reset({});
    setPanel(null);
  }, [dispatch, formMethods]);

  const onSave = useCallback(
    async (formValues = {}) => {
      const response = await saveData(formValues);
      dispatch(setUpdateFormData({ [entityName]: {} }));
      dispatch(
        setFormData({ operation: "deleteObj", entity_name: entityName }),
      );
      setPanel(null);
    },
    [saveData],
  );

  useEffect(() => {
    if (panel?.action === "get" && recordId != null) {
      getData(recordId).catch(() => {});
    }
  }, [getData, panel?.action, recordId]);

  const showPageComponent = useCallback(
    async ({
      componentPath,
      panelType = "dialog",
      width = "md",
      toolbar = null,
      selectedRows = [],
      props = {},
    }) => {
      if (!componentPath) {
        console.warn("showPageComponent: componentPath is required");
        return;
      }
      try {
        dispatch(setUpdateFormData({}));
        formMethods.reset({});
        const Component = await dynamicComponentImport(componentPath);

        if (typeof Component !== "function") {
          console.error("Invalid dynamic component:", {
            componentPath,
            Component,
          });

          return;
        }
        const row = selectedRows?.[0] || null;
        const action = getPageAction(
          toolbar?.toolbar_action ?? toolbar?.TOOLBAR_ACTION,
        );

        const source = {
          action,
          toolbar,
          row,
          rows: selectedRows,
          selectedRows,
          dynamicProps: toolbar?.dynamicProps || null,
        };

        setPanel({
          component: Component,
          panelType,
          width,
          action,
          title:
            toolbar?.toolbar_title ||
            toolbar?.toolbar_name ||
            toolbar?.TOOLBAR_TITLE ||
            toolbar?.TOOLBAR_NAME,
          props: {
            ...props,
            toolbar,
            selectedRows,
            row,
            source,
            action,
            useForm: formMethods,
            onClose,
            onSave,
          },
        });
      } catch (error) {
        console.error("showPageComponent failed:", componentPath, error);
      }
    },
    [dispatch, formMethods, onClose, onSave],
  );

  return (
    <FormProvider {...formMethods}>
      <PageRenderer
        page={page}
        showPageComponent={showPageComponent}
        useForm={formMethods}
      />

      {panel && panel.panelType !== "fields" && (
        <PagePanelController
          component={panel.component}
          props={panel.props}
          panelType={panel.panelType}
          width={panel.width}
          action={panel.action}
          title={panel.title}
          onClose={onClose}
          onSave={onSave}
          useForm={formMethods}
          isSaving={isLoading}
          saveError={error}
        />
      )}
    </FormProvider>
  );
};

export default PageController;
