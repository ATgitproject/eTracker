"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getListData } from "@/services/listService";
import { fieldLabelSx } from "./utils/fieldStyles";
import * as LucideIcons from "lucide-react";

const DropdownComponent = ({
  label,
  value,
  options = [],
  isMultiple = false,
  optValue,
  optCode,
  listname,
  placeholder = "",
  disabled = false,
  onChange,
  name,
  fullWidth = true,
  icon,
  required = false,
  list_icon_field_id,
}) => {
  const optionCode = optCode ? optCode : "field_id";
  const optionValue = optValue ? optValue : "value";

  const [listOptions, setListOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const SelectedIcon = icon
    ? React.isValidElement(icon)
      ? icon.type
      : icon
    : AccountBalanceWalletOutlinedIcon;

  const renderListIcon = (iconName) => {
    if (!iconName) return null;

    if (iconName.startsWith("/")) {
      return (
        <Box
          component="img"
          src={iconName}
          alt=""
          sx={{ width: 22, height: 22, objectFit: "contain" }}
        />
      );
    }

    const componentName = iconName
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    const IconComponent = LucideIcons[componentName];

    if (!IconComponent) {
      return <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 21 }} />;
    }

    return <IconComponent size={21} strokeWidth={1.8} />;
  };

  const fetchOptions = async () => {
    try {
      setLoading(true);
      const data = await getListData(listname);
      const mappedOptions = (data?.fields || []).map((item) => ({
        value: item[optionCode],
        label: item[optionValue],
        icon: list_icon_field_id ? item[list_icon_field_id] : null,
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
  }, [listname]);

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
      <InputLabel sx={fieldLabelSx} className={required ? "asterisk" : ""}>
        {label}
      </InputLabel>

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
          onChange={onChange}
          displayEmpty
          disabled={disabled || loading}
          name={name}
          IconComponent={KeyboardArrowDownIcon}
          fullWidth
          renderValue={(selected) => {
            if (selected === "" || selected == null) {
              return (
                <span style={{ color: "#7182A6", fontSize: 16 }}>
                  {loading ? "Loading..." : placeholder || `Select ${label}`}
                </span>
              );
            }

            const selectedOption = dropdownOptions.find(
              (option) => option.value === selected,
            );

            return (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {selectedOption?.icon && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#64748B",
                    }}
                  >
                    {renderListIcon(selectedOption.icon)}
                  </Box>
                )}

                <span style={{ color: "#172554", fontSize: 16 }}>
                  {selectedOption?.label ?? selected}
                </span>
              </Box>
            );
          }}
          sx={{
            height: "48px",
            borderRadius: "8px",
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
              borderColor: "#D0D0D0",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#B8B8B8",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6842FF",
              borderWidth: "1px",
            },

            "& .MuiSelect-icon": {
              right: "12px",
              color: "#5B6B92",
              fontSize: "24px",
            },
          }}
        >
          {dropdownOptions?.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ minHeight: 40, gap: 1 }}
            >
              {option.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: "28px !important",
                    color: "#64748B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {renderListIcon(option.icon)}
                </ListItemIcon>
              )}

              <ListItemText
                primary={option.label}
                slotProps={{
                  primary: {
                    sx: { fontSize: 14, color: "#172554" },
                  },
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default DropdownComponent;
