"use client";
import { Box, InputLabel } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const toDayjsRange = (value) =>
  Array.isArray(value) && value.some(Boolean)
    ? value.map((v) => (v ? dayjs(v) : null))
    : [];

export default function DateRangeComponent({
  name,
  label,
  value,
  disabled = false,
  onChange,
  required,
  dateFormat,
}) {
  const [selectedDate, setSelectedDate] = useState(() => toDayjsRange(value));

  const valueKey = Array.isArray(value)
    ? value.map((v) => (v ? dayjs(v).format("YYYY-MM-DD") : "")).join("|")
    : "";

  useEffect(() => {
    if (valueKey) setSelectedDate(toDayjsRange(value));
  }, [valueKey]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);

    const [start, end] = newDate ?? [];
    if (start?.isValid() && end?.isValid()) {
      onChange?.(newDate);
    }
  };

  return (
    <Box>
      <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <DateRangePicker
            slots={{ field: SingleInputDateRangeField }}
            name={name}
            id={name}
            disabled={disabled}
            value={selectedDate}
            onChange={handleDateChange}
            format={dateFormat || "DD-MM-YYYY"}
          />
        </Box>
      </LocalizationProvider>
    </Box>
  );
}
