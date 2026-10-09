"use client";

const useTableActions = ({ showPageComponent, selectedRows = [] }) => {
  const handleToolbarClick = (toolbar) => {
    if (typeof showPageComponent !== "function") {
      console.error("showPageComponent is not available");
      return;
    }

    const panelType = toolbar.panel_type ?? toolbar.PANEL_TYPE ?? "dialog";
    const width = toolbar.width ?? toolbar.WIDTH ?? "md";

    showPageComponent({
      componentPath: toolbar.component_path ?? toolbar.COMPONENT_PATH,
      panelType,
      width,
      toolbar,
      selectedRows,
    });
  };

  return {
    handleToolbarClick,
  };
};

export default useTableActions;
