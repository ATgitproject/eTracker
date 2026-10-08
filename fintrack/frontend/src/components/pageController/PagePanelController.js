"use client";

import PageDialog from "./PageDialog";

const PagePanelController = ({
  component,
  props = {},
  panelType = "dialog",
  width = "md",
  action,
  title,
  onClose,
  onSave,
  useForm,
}) => {
  if (typeof component !== "function") {
    console.error("PagePanelController: invalid component", component);

    return null;
  }

  if (panelType === "dialog") {
    return (
      <PageDialog
        Component={component}
        componentProps={props}
        width={width}
        action={action}
        title={title}
        onClose={onClose}
        onSave={onSave}
        useForm={useForm}
      />
    );
  }

  return null;
};

export default PagePanelController;
