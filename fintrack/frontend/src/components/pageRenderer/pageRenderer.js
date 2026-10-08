"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import componentRegistry from "../../config/componentRegistry";
import { TOOLBAR_ICONS } from "../controls/TableComponent/utils/TableUtils";
import ButtonComponent from "../controls/Button/ButtonComponent";
const PageRenderer = ({ page, showPageComponent }) => {
  const { title, description, components = [] } = page;
  const [pageToolbars, setPageToolbars] = useState([]);

  if (!page) {
    return null;
  }

  const renderComponent = (component) => {
    if (!component) {
      return null;
    }

    const Component = componentRegistry?.[component.type];

    if (typeof Component !== "function") {
      console.error(`Component not found in registry: ${component.type}`);

      return null;
    }

    const props = component.props || {};

    const children = Array.isArray(props.children)
      ? props.children.map(renderComponent)
      : undefined;

    return (
      <div
        key={component.id || component.type}
        className="page-renderer__item"
        style={{
          "--component-width": component.width || 12,
        }}
      >
        <Component
          {...props}
          showPageComponent={showPageComponent}
          onPageToolbarChange={setPageToolbars}
        >
          {children}
        </Component>
      </div>
    );
  };

  const renderPageToolbar = (toolbar) => {
    const action = toolbar.toolbar_action ?? toolbar.TOOLBAR_ACTION;
    const Icon = TOOLBAR_ICONS[action];

    const panelType = toolbar.panel_type ?? toolbar.PANEL_TYPE ?? "dialog";

    const width = toolbar.width ?? toolbar.WIDTH ?? "md";

    return (
      <ButtonComponent
        key={toolbar.toolbar_id ?? toolbar.TOOLBAR_ID}
        variant="primary"
        fullWidth={false}
        startIcon={Icon ? <Icon /> : null}
        onClick={() =>
          showPageComponent?.({
            componentPath: toolbar.component_path ?? toolbar.COMPONENT_PATH,
            panelType,
            width,
            toolbar,
            selectedRows: [],
          })
        }
      >
        {toolbar.toolbar_name ?? toolbar.TOOLBAR_NAME}
      </ButtonComponent>
    );
  };

  return (
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

      <div className="page-renderer__content">
        {components.map(renderComponent)}
      </div>
    </div>
  );
};

export default PageRenderer;
