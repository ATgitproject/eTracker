"use client";
import React, { useEffect, useState } from "react";
import Segmented from "rc-segmented";
import "rc-segmented/assets/index.css";
import { getListData } from "@/services/listService";

const SegmentButtonComponent = ({
  value,
  onChange,
  options = [],
  disabled = false,
  listname,
  optCode,
  optValue,
  ...props
}) => {
  const [optionList, setoptionList] = useState(options || []);
  const optionCode = optCode ? optCode : "field_id";
  const optionValue = optValue ? optValue : "value";

  const fetchOptions = async () => {
    try {
      const data = await getListData(listname);
      const mappedOptions = (data?.fields || []).map((item) => ({
        value: item[optionCode],
        label: item[optionValue],
      }));
      setoptionList(mappedOptions);
    } catch (error) {
      console.error("Failed to load Segemnt Buttons:", error);
      setListOptions([]);
    }
  };

  useEffect(() => {
    if (listname && !options?.length) {
      fetchOptions(listname);
    }
  }, [listname]);

  return (
    <Segmented
      {...props}
      value={value}
      options={optionList}
      disabled={disabled}
      onChange={onChange}
      className="segmented-control"
    />
  );
};

export default SegmentButtonComponent;
