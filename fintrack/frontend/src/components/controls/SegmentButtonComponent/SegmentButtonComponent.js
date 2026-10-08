"use client";

import React from "react";
import Segmented from "rc-segmented";
import "rc-segmented/assets/index.css";

const SegmentButtonComponent = ({
  value,
  onChange,
  options = [],
  disabled = false,
  ...props
}) => {
  return (
    <Segmented
      {...props}
      value={value}
      options={options}
      disabled={disabled}
      onChange={onChange}
      className="segmented-control"
    />
  );
};

export default SegmentButtonComponent;
