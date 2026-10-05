"use client";

import React from "react";

import componentRegistry from "../../config/componentRegistry";

import "./pageRenderer.scss";

const PageRenderer = ({ page }) => {
  if (!page) {
    return null;
  }

  const components = page.components || [];

  const renderComponent = (component) => {
    const Component = componentRegistry[component.type];

    if (!Component) {
      console.warn(`Unknown component type: ${component.type}`);
      return null;
    }

    const props = component.props || {};

    const children = props.children
      ? props.children.map(renderComponent)
      : undefined;

    return (
      <div
        key={component.id}
        className="page-renderer__item"
        style={{
          "--component-width": component.width || 12,
        }}
      >
        <Component {...props}>{children}</Component>
      </div>
    );
  };

  return <div className="page-renderer">{components.map(renderComponent)}</div>;
};

export default PageRenderer;
