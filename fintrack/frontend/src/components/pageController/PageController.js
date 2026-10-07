"use client";

import { useCallback, useState } from "react";
import PagePanelController from "./PagePanelController";
import dynamicComponentImport from "../dynamicRenderController/dynamicComponentImport";
import PageRenderer from "../pageRenderer/pageRenderer";
import { getPageAction } from "../../utils/genericUtils";

const PageController = ({ page }) => {
  const [panel, setPanel] = useState(null);

  const onClose = useCallback(() => {
    setPanel(null);
  }, []);

  const onSave = useCallback(async (saveData = {}) => {
    console.log("PageController onSave:", saveData);

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
        const action = getPageAction(toolbar?.TOOLBAR_ACTION);

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
          title: toolbar?.TOOLBAR_TITLE || toolbar?.TOOLBAR_NAME,
          props: {
            ...props,
            toolbar,
            selectedRows,
            row,
            source,
            action,
            onClose,
            onSave,
          },
        });
      } catch (error) {
        console.error("showPageComponent failed:", componentPath, error);
      }
    },
    [onClose, onSave],
  );

  return (
    <>
      <PageRenderer page={page} showPageComponent={showPageComponent} />

      {panel &&
        panel.panelType !==
          "fields"(
            <PagePanelController
              component={panel.component}
              props={panel.props}
              panelType={panel.panelType}
              width={panel.width}
              action={panel.action}
              title={panel.title}
              onClose={onClose}
              onSave={onSave}
            />,
          )}
    </>
  );
};

export default PageController;
