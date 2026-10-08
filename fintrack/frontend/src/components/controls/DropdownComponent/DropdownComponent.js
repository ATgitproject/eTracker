"use client";

import React, { useEffect, useState } from "react";
import { Box, Select, MenuItem, InputLabel } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getListData } from "@/services/listService";

const DropdownComponent = ({
  label,
  value,
  options = [],
  isMultiple = false,
  optionDisplayName,
  optionValue,
  listname,
  placeholder = "",
  disabled = false,
  readOnly = false,
  error = false,
  onChange,
  name,
  fullWidth = true,
  icon,
  required = false,
}) => {
  const optdisplayName = optionDisplayName ? optionDisplayName : "value";
  const optValue = optionValue ? optionValue : "field_id";

  const [listOptions, setListOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const SelectedIcon = icon || AccountBalanceWalletOutlinedIcon;

  const fetchOptions = async () => {
    try {
      setLoading(true);
      const data = await getListData(listname);
      const mappedOptions = (data?.fields || []).map((item) => ({
        value: item[optValue],
        label: item[optdisplayName],
      }));

      setListOptions(mappedOptions);
    } catch (error) {
      console.error("Failed to load dropdown options:", error);
      setListOptions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listname && fetchOptions();
  }, [listname, optionDisplayName]);

  const dropdownOptions = listname ? listOptions : options;

  if (isMultiple) {
    return null;
  }

  return (
    <Box
      sx={{
        width: fullWidth ? "100%" : "auto",
      }}
    >
      <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>

      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <SelectedIcon
          sx={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            fontSize: "21px",
            color: "#64748B",
            pointerEvents: "none",
          }}
        />

        <Select
          value={value}
          onChange={(event) => {
            const selectedValue = event.target.value;
            onChange?.(selectedValue);
          }}
          displayEmpty
          disabled={disabled || loading}
          name={name}
          readOnly={readOnly}
          error={error}
          IconComponent={KeyboardArrowDownIcon}
          fullWidth
          renderValue={(selected) => {
            if (!selected) {
              return (
                <span
                  style={{
                    color: "#7182A6",
                    fontSize: "16px",
                  }}
                >
                  {loading ? "Loading..." : placeholder || `Select ${label}`}
                </span>
              );
            }

            const selectedOption = dropdownOptions.find(
              (option) => option.value === selected,
            );

            return (
              <span
                style={{
                  color: "#172554",
                  fontSize: "16px",
                }}
              >
                {selectedOption?.label ?? selected}
              </span>
            );
          }}
          sx={{
            height: "48px",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",

            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              height: "48px",
              boxSizing: "border-box",
              paddingLeft: "48px",
              paddingRight: "42px",
              paddingTop: 0,
              paddingBottom: 0,
            },

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#DCE2F0",
              borderWidth: "1px",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#B8C3DC",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6D3DF5",
              borderWidth: "1px",
            },

            "& .MuiSelect-icon": {
              right: "12px",
              color: "#5B6B92",
              fontSize: "24px",
            },

            "&.Mui-disabled": {
              backgroundColor: "#F8FAFC",
            },
          }}
        >
          {dropdownOptions.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default DropdownComponent;
