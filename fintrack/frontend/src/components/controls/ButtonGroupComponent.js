"use client";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function ButtonGroupComponent({
  value,
  onChange,
  options = [],
  disabled = false,
  listname,
  optCode,
  optValue,
  ...props
}) {
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
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 0.75,
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
              px: 1,
              border: "1px solid",
              borderColor: selected ? "#6842FF" : "#DFE5F2",
              borderRadius: "10px",
              bgcolor: selected ? "#F1EDFF" : "#FFFFFF",
              color: selected ? "#6842FF" : "#24345B",
              fontSize: 13,
              fontWeight: selected ? 600 : 400,
              textTransform: "none",
              "&:hover": {
                bgcolor: selected ? "#EAE3FF" : "#F8F9FD",
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
}
