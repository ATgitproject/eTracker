"use client";

import React from "react";

import "./LayoutContainer.scss";

const LayoutContainer = ({ gap = 12, children }) => {
  return (
    <div
      className="layout-container"
      style={{
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
