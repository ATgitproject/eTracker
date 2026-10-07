"use client";

import componentRegistry from "../../config/componentRegistry";

const PageRenderer = ({ page }) => {
  if (!page) {
    return null;
  }

  const { title, description, components = [] } = page;

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

  return (
    <div className="page-renderer">
      {(title || description) && (
        <div className="page-renderer__header">
          {title && <h1 className="page-renderer__title">{title}</h1>}

          {description && (
            <p className="page-renderer__description">{description}</p>
          )}
        </div>
      )}

      <div className="page-renderer__content">
        {components.map(renderComponent)}
      </div>
    </div>
  );
};

export default PageRenderer;
