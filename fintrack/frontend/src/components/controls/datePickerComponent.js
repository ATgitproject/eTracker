"use client";
import { InputLabel, Typography, useTheme } from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

export default function DatePickerComponent(props) {
  let {
    label,
    placeholder,
    name,
    format = "DD-MMM-YYYY",
    id,
    className,
    required,
    disabled,
    value,
    onChange,
    setDefCurrrentDate,
  } = props;

  const handleDateChange = (newDate) => {
    const formattedData = dayjs(newDate)?.format(format);
    onChange(formattedData);
    setSelectedDate(newDate);
  };

  const [selectedDate, setSelectedDate] = useState(value ? dayjs(value) : null);

  useEffect(() => {
    let newDate = dayjs();
    if (setDefCurrrentDate) {
      handleDateChange(newDate);
    }
  }, []);

  return (
    <>
      <div>
        <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            name={name}
            id={id}
            value={selectedDate}
            onChange={handleDateChange}
            disabled={disabled}
            className={className}
          />
        </LocalizationProvider>
      </div>
    </>
  );
}
