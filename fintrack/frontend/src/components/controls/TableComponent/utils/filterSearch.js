"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAlt";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import TextField from "../../TextField";
import DatePickerComponent from "../../datePickerComponent";
import DropdownComponent from "../../DropdownComponent";

const FilterSearch = ({ config, onApply }) => {
  const fields = config?.fields || [];

  const [anchorEl, setAnchorEl] = useState(null);
  const [values, setValues] = useState({});
  const open = Boolean(anchorEl);

  const updateValue = useCallback((fieldId, value) => {
    setValues((previous) => ({
      ...previous,
      [fieldId]: value,
    }));
  }, []);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const buildConditions = useCallback(() => {
    const conditions = [];

    fields.forEach((field) => {
      const value = values[field.field_id];
      const fieldId = field.entity_field_name;

      if (!fieldId || value == null || value === "") return;
      if (Array.isArray(value) && value.length === 0) return;

      if (
        field.field_type === "buttonGroup" &&
        String(value).toLowerCase() === "all"
      ) {
        return;
      }

      if (field.field_id === "date_range") {
        if (value === "all") return;

        const now = new Date();
        let start;
        let end;

        if (value === "this_month") {
          start = new Date(now.getFullYear(), now.getMonth(), 1);
          end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        } else if (value === "last_month") {
          start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          end = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (value === "last_30_days") {
          start = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() - 29,
          );
          end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        } else if (value === "this_year") {
          start = new Date(now.getFullYear(), 0, 1);
          end = new Date(now.getFullYear() + 1, 0, 1);
        }

        if (start && end) {
          const toDateString = (date) =>
            `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

          conditions.push({
            field: fieldId,
            operator: "gte",
            value: toDateString(start),
          });

          conditions.push({
            field: fieldId,
            operator: "lt",
            value: toDateString(end),
          });
        }

        return;
      }

      conditions.push({
        field: fieldId,
        operator: field.filterOperator || "eq",
        value: value,
      });
    });

    return conditions;
  }, [fields, values]);

  const handleApply = () => {
    const conditions = buildConditions();
    onApply?.(conditions);
    handleClose();
  };

  const handleReset = () => {
    setValues({});
    console.log("Table filter conditions:", []);
    onApply?.([]);
    handleClose();
  };

  const renderField = (field) => {
    const value = values[field.field_id] ?? "";
    const commonProps = {
      label: "",
      value,
      onChange: (eventOrValue) => {
        const nextValue =
          eventOrValue?.target !== undefined
            ? eventOrValue.target.value
            : eventOrValue;

        updateValue(field.field_id, nextValue);
      },
      fullWidth: true,
      size: "small",
    };

    if (field.field_type === "buttonGroup") {
      return (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 0.75,
          }}
        >
          {(field.options || []).map((option) => {
            const selected = (value || "all") === option.value;

            return (
              <Button
                key={option.value}
                onClick={() => updateValue(field.field_id, option.value)}
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
                {option.label}
              </Button>
            );
          })}
        </Box>
      );
    }

    if (field.field_type === "dropdownComponent") {
      const icon =
        field.field_id === "date_range" ? (
          <CalendarMonthOutlinedIcon />
        ) : field.field_id === "category_id" ? (
          <LocalOfferOutlinedIcon />
        ) : (
          <CreditCardOutlinedIcon />
        );

      return (
        <DropdownComponent
          {...commonProps}
          name={field.field_id}
          value={value}
          listname={field.listname}
          optCode={field.optCode}
          optValue={field.optValue}
          placeholder={
            field.placeholder || `Select ${field.label.toLowerCase()}`
          }
          icon={icon}
        />
      );
    }

    if (field.field_type === "textfield") {
      return (
        <TextField
          {...commonProps}
          name={field.field_id}
          type={
            ["amount_min", "amount_max"].includes(field.field_id)
              ? "number"
              : "text"
          }
          placeholder={field.placeholder || ""}
          icon={
            field.field_id === "merchant" ? (
              <StorefrontOutlinedIcon />
            ) : undefined
          }
        />
      );
    }

    if (field.field_type === "datePickerComponent") {
      return (
        <DatePickerComponent
          name={field.field_id}
          value={value}
          format="YYYY-MM-DD"
          placeholder={field.placeholder || ""}
          onChange={(newValue) => updateValue(field.field_id, newValue)}
        />
      );
    }

    return null;
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<FilterAltOutlinedIcon />}
        onClick={handleOpen}
        sx={{
          height: 44,
          px: 2,
          textTransform: "none",
          fontWeight: 500,
          color: "#6842FF",
          bgcolor: "#F5F2FF",
          borderColor: "#DED7FF",
          borderRadius: "12px",
          "&:hover": {
            bgcolor: "#EEE9FF",
            borderColor: "#C8BCFF",
          },
        }}
      >
        Filter
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              width: 340,
              maxWidth: "calc(100vw - 24px)",
              mt: 1,
              borderRadius: "16px",
              border: "1px solid #E8ECF5",
              boxShadow: "0 12px 40px rgba(27, 39, 75, 0.14)",
              overflow: "hidden",
            },
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            pb: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 700,
              color: "#10184A",
            }}
          >
            {config?.title || "Filter Transactions"}
          </Typography>

          <IconButton
            size="small"
            onClick={handleClose}
            aria-label="Close filters"
            sx={{ color: "#647393" }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box
          sx={{
            px: 2,
            pb: 1,
            maxHeight: "min(65vh, 620px)",
            overflowY: "auto",
            "& .MuiInputLabel-root": {
              display: "none",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              fontSize: 13,
              bgcolor: "#FFFFFF",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#DFE5F2",
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#B9C4DE",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#6842FF",
              },
            "& .MuiInputBase-input": {
              fontSize: 13,
            },
          }}
        >
          {fields.map((field) => (
            <Box key={field.field_id} sx={{ mb: 2 }}>
              <Typography
                sx={{
                  mb: 0.8,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#172344",
                }}
              >
                {field.label}
              </Typography>

              {renderField(field)}
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: "#EDF0F7" }} />

        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            bgcolor: "#FFFFFF",
          }}
        >
          <Button
            startIcon={<RestartAltOutlinedIcon />}
            onClick={handleReset}
            sx={{
              color: "#6842FF",
              textTransform: "none",
              fontWeight: 500,
              px: 0,
            }}
          >
            {config?.resetLabel || "Reset"}
          </Button>

          <Button
            variant="contained"
            onClick={handleApply}
            sx={{
              minWidth: 145,
              height: 42,
              borderRadius: "10px",
              bgcolor: "#6842FF",
              boxShadow: "none",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#5733E8",
                boxShadow: "none",
              },
            }}
          >
            {config?.applyLabel || "Apply Filters"}
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default FilterSearch;
