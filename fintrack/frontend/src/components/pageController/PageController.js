"use client";

import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PagePanelController from "./PagePanelController";
import dynamicComponentImport from "../dynamicRenderController/dynamicComponentImport";
import PageRenderer from "../pageRenderer/pageRenderer";
import { getPageAction } from "../../utils/genericUtils";
import { setUpdateFormData } from "@/redux/slices/formDataSlice";
import { useDispatch } from "react-redux";

const PageController = ({ page }) => {
  const dispatch = useDispatch();
  const [panel, setPanel] = useState(null);
  const formMethods = useForm({ mode: "all" });

  const onClose = useCallback((entity_name) => {
    dispatch(setUpdateFormData({}));
    useForm.reset({});
    setPanel(null);
  }, []);

  const onSave = useCallback((entity_name) => {
    dispatch(setUpdateFormData({}));
    useForm.reset({});
    setPanel(null);
  }, []);

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
    [formMethods, onClose, onSave],
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
        />
      )}
    </FormProvider>
  );
};

export default PageController;
