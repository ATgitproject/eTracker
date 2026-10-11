"use client";

import { useCallback } from "react";
import dynamicComponentImport from "@/components/dynamicRenderController/dynamicComponentImport";
import { getPageAction } from "@/utils/genericUtils";

const usePageComponentController = ({
  setPanel,
  formMethods,
  onClose,
  onSave,
  onDelete,
  clearFormState,
}) => {
  const showPageComponent = useCallback(
    async ({
      componentPath,
      panelType = "dialog",
      width = "md",
      toolbar = null,
      selectedRows = [],
      props = {},
    }) => {
      const row = selectedRows?.[0] || null;
      const action = getPageAction(toolbar?.toolbar_action);

      if (action === "delete") {
        clearFormState();

        await onDelete?.({
          entityName: toolbar?.entity_name ?? toolbar?.ENTITYNAME,
          recordId: row?.id ?? row,
        });

        return;
      }

      if (!componentPath) {
        console.warn("showPageComponent: componentPath is required");
        return;
      }

      try {
        clearFormState();

        const Component = await dynamicComponentImport(componentPath);

        if (typeof Component !== "function") {
          console.error("Invalid dynamic component:", componentPath);
          return;
        }

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
            toolbar?.TOOLBAR_NAME ||
            "Details",
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
    [setPanel, formMethods, onClose, onSave, onDelete, clearFormState],
  );

  return { showPageComponent };
};

export default usePageComponentController;
