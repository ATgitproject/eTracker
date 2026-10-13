"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import { getData } from "@/services/dataService";

const SummaryOverview = (props) => {
  const {
    entity_name,
    title = "Summary",
    primary_field,
    secondary_field,
    secondary_label = "Used",
    remaining_field,
    remaining_label = "Remaining",
    percentage_field,
    format = "currency",
    accent_color = "#19A982",
  } = props;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!entity_name) return;

    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await getData({ objName: entity_name });

        const rows = Array.isArray(response)
          ? response
          : (response?.data?.data ?? response?.data ?? response?.rows ?? []);

        if (!cancelled) {
          setData(Array.isArray(rows) ? (rows[0] ?? {}) : (rows ?? {}));
        }
      } catch (err) {
        console.error("Failed to fetch summary:", err);
        if (!cancelled) {
          setError(true);
          setData(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [entity_name]);

  const formatValue = (value) => {
    if (value == null || value === "") return "—";

    const number = Number(value);
    if (!Number.isFinite(number)) return String(value);

    if (format === "currency") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(number);
    }

    return format === "number"
      ? new Intl.NumberFormat("en-IN").format(number)
      : String(value);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Unable to load summary.</Typography>;
  }

  if (!data) return null;

  const primaryValue = Number(data[primary_field] ?? 0);
  const secondaryValue = Number(data[secondary_field] ?? 0);
  const remainingValue = data[remaining_field];

  const percentage = Number(
    data[percentage_field] ??
      (primaryValue > 0 ? (secondaryValue / primaryValue) * 100 : 0),
  );

  const progress = Math.min(Math.max(percentage, 0), 100);

  return (
    <Box
      sx={{
        display: "flex",
        height: "125px",
        flexDirection: "column",
        justifyContent: "center",
        gap: 1.5,
        width: "100%",
        minHeight: 100,
        p: 2,
        boxSizing: "border-box",
        border: "1px solid #EDF0FA",
        borderRadius: "14px",
        background: "#d2b4e72e",
        boxShadow: "0 3px 16px rgba(31, 55, 100, 0.05)",
        border: "1px solid #d2d2d2",
        marginTop: "3px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          marginBottom: "-10px",
        }}
      >
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography sx={{ fontSize: 14, color: "#52658C" }}>
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#101A44",
            }}
          >
            {formatValue(data[primary_field])}
          </Typography>

          <Typography sx={{ fontSize: 13, color: "#64789F" }}>
            {formatValue(data[secondary_field])} {secondary_label}
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right", flexShrink: 0 }}>
          <Typography
            sx={{
              fontSize: 21,
              fontWeight: 700,
              color: accent_color,
            }}
          >
            {formatValue(remainingValue)}
          </Typography>

          <Typography sx={{ fontSize: 13, color: accent_color }}>
            {remaining_label}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            flex: 1,
            height: 8,
            borderRadius: 10,
            backgroundColor: "#E7ECF6",
            "& .MuiLinearProgress-bar": {
              borderRadius: 10,
              backgroundColor: accent_color,
            },
          }}
        />

        <Typography
          sx={{
            minWidth: 40,
            textAlign: "right",
            fontSize: 13,
            fontWeight: 600,
            color: "#52658C",
          }}
        >
          {Math.round(percentage)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default SummaryOverview;
