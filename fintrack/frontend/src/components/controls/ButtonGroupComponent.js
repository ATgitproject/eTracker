"use client";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const ButtonGroupComponent = ({
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
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      {options?.map((option) => {
        const selected = value === option?.value;

        return (
          <Button
            key={option.value}
            onClick={() => onChange(option?.value)}
            sx={{
              minWidth: 0,
              minHeight: 39,
              px: 0,
              px: 3,
              border: "1px solid",
              borderColor: selected ? "#6738f5" : "#DFE5F2",
              borderRadius: "20px",
              bgcolor: selected ? "#6738f5" : "#FFFFFF",
              color: selected ? "#fff" : "#24345B",
              fontSize: 13,
              fontWeight: selected ? 600 : 400,
              textTransform: "none",
              boxShadow: "0 2px 6px #6738f52e",
              "&:hover": {
                bgcolor: selected ? "#6738f5" : "#F8F9FD",
                borderColor: "#6842FF",
              },
            }}
          >
            {option?.label}
          </Button>
        );
      })}
    </Box>
  );
};

export default ButtonGroupComponent;
