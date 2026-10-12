"use client";
import { InputLabel, Typography, useTheme } from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { fieldControlSx, fieldLabelSx } from "./utils/fieldStyles";

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
    setSelectedDate(value ? dayjs(value) : null);
  }, [value]);

  useEffect(() => {
    let newDate = dayjs();
    if (setDefCurrrentDate) {
      handleDateChange(newDate);
    }
  }, []);

  return (
    <>
      <div>
        <InputLabel sx={fieldLabelSx} className={required ? "asterisk" : ""}>
          {label}
        </InputLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            name={name}
            id={id}
            value={selectedDate}
            onChange={handleDateChange}
            disabled={disabled}
            className={className}
            format={format}
            slotProps={{
              textField: {
                fullWidth: true,
                size: "medium",
                placeholder: placeholder || "DD-MMMM-YYYY",
                sx: {
                  "& .MuiPickersInputBase-root": {
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                  },

                  "& .MuiPickersOutlinedInput-notchedOutline": {
                    borderColor: "#D0D0D0",
                  },

                  "& .MuiPickersInputBase-root:hover .MuiPickersOutlinedInput-notchedOutline":
                    {
                      borderColor: "#B8B8B8",
                    },

                  "& .MuiPickersInputBase-root.Mui-focused .MuiPickersOutlinedInput-notchedOutline":
                    {
                      borderColor: "#6842FF",
                      borderWidth: "1px",
                    },

                  "& .MuiPickersInputBase-input": {
                    padding: "0 12px",
                    fontSize: "14px",
                  },

                  "& .MuiIconButton-root": {
                    color: "#757575",
                    marginRight: "2px",
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
}
