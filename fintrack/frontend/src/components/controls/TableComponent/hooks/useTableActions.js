"use client";

const useTableActions = ({ showPageComponent, selectedRows = [] }) => {
  const handleToolbarClick = (toolbar) => {
    if (typeof showPageComponent !== "function") {
      console.error("showPageComponent is not available");
      return;
    }

    showPageComponent({
      componentPath: toolbar.COMPONENT_PATH,
      panelType: toolbar.PANEL_TYPE || "dialog",
      width: toolbar.WIDTH || "md",
      toolbar,
      selectedRows,
    });
  };

  return {
    handleToolbarClick,
  };
};

export default useTableActions;
