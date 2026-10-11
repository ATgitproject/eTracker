"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Typography, FormControl, Select, MenuItem } from "@mui/material";
import { getData } from "@/services/dataService";

const formatCurrency = (value) => {
  const amount = Number(value) || 0;

  if (Math.abs(amount) >= 1000) {
    const formatted = amount / 1000;
    return `$${Number.isInteger(formatted) ? formatted : formatted.toFixed(1)}K`;
  }

  return `$${amount.toLocaleString("en-US")}`;
};

const formatDateLabel = (value) => {
  if (!value) return "";

  // Avoid timezone shifts when the API returns YYYY-MM-DD.
  const dateString = String(value);
  const date = /^\d{4}-\d{2}-\d{2}$/.test(dateString)
    ? new Date(`${dateString}T12:00:00`)
    : new Date(dateString);

  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export default function LineChartComponent({
  title = "Spending Trend",
  entity_name: entityName,
  xAxisKey = "date",
  dataKey = "amount",
  height = 200,
  showArea = true,
  showPoints = true,
  filterLabel = "This Month",
  lineColor = "#6842FF",
}) {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState(filterLabel);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (!entityName) {
      setData([]);
      return;
    }

    try {
      setLoading(true);

      const response = await getData({
        objName: entityName,
      });

      const records = response?.data || [];
      setData(records);
    } catch (error) {
      console.error("Error fetching chart data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [entityName]);

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = useMemo(() => {
    return [...data]
      .filter(
        (item) =>
          item[xAxisKey] != null && Number.isFinite(Number(item[dataKey])),
      )
      .sort(
        (a, b) =>
          new Date(a[xAxisKey]).getTime() - new Date(b[xAxisKey]).getTime(),
      );
  }, [data, xAxisKey, dataKey]);

  const width = 640;
  const padding = { top: 20, right: 20, bottom: 42, left: 48 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxValue = Math.max(
    500,
    ...chartData.map((item) => Number(item[dataKey]) || 0),
  );

  const yMax = Math.ceil(maxValue / 500) * 500;
  const yTicks = Array.from({ length: 6 }, (_, index) => (yMax / 5) * index);

  const points = chartData.map((item, index) => {
    const x =
      padding.left +
      (chartData.length <= 1
        ? chartWidth / 2
        : (index / (chartData.length - 1)) * chartWidth);

    const y =
      padding.top +
      chartHeight -
      ((Number(item[dataKey]) || 0) / yMax) * chartHeight;

    return { x, y, item };
  });

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const areaPath = points.length
    ? `${linePath} L ${points[points.length - 1].x} ${
        padding.top + chartHeight
      } L ${points[0].x} ${padding.top + chartHeight} Z`
    : "";

  const xLabelIndexes = [
    ...new Set(
      Array.from({ length: Math.min(6, points.length) }, (_, index) =>
        points.length <= 1 ? 0 : Math.round((index * (points.length - 1)) / 5),
      ),
    ),
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        p: 2,
        borderRadius: 3,
        bgcolor: "#FFFFFF",
        boxShadow: "0 2px 16px rgba(36, 53, 90, 0.06)",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "#172344",
          }}
        >
          {title}
        </Typography>

        <FormControl size="small">
          <Select
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#172344",
              bgcolor: "#F7F8FC",
              borderRadius: 2,
              "& .MuiSelect-select": { py: 0.6 },
            }}
          >
            <MenuItem value="This Month">This Month</MenuItem>
            <MenuItem value="Last Month">Last Month</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={`${title} line chart`}
          style={{ display: "block", width: "100%", height: "auto" }}
        >
          <defs>
            <linearGradient
              id="spendingAreaGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={lineColor} stopOpacity="0.20" />
              <stop offset="100%" stopColor={lineColor} stopOpacity="0.015" />
            </linearGradient>
          </defs>

          {yTicks.map((tick, index) => {
            const y = padding.top + chartHeight - (tick / yMax) * chartHeight;

            return (
              <g key={index}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#E9EDF6"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 12}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="11"
                  fill="#647393"
                >
                  {formatCurrency(tick)}
                </text>
              </g>
            );
          })}

          {points.map((point, index) => (
            <line
              key={`grid-${index}`}
              x1={point.x}
              y1={padding.top}
              x2={point.x}
              y2={padding.top + chartHeight}
              stroke="#F1F3F9"
              strokeWidth="1"
            />
          ))}

          {showArea && areaPath && (
            <path d={areaPath} fill="url(#spendingAreaGradient)" />
          )}

          {linePath && (
            <path
              d={linePath}
              fill="none"
              stroke={lineColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {showPoints &&
            points.map((point, index) => (
              <circle
                key={`point-${index}`}
                cx={point.x}
                cy={point.y}
                r="2.5"
                fill="#FFFFFF"
                stroke={lineColor}
                strokeWidth="2"
              >
                <title>
                  {formatDateLabel(point.item[xAxisKey])}:{" "}
                  {formatCurrency(point.item[dataKey])}
                </title>
              </circle>
            ))}

          {xLabelIndexes.map((index) => {
            const point = points[index];
            if (!point) return null;

            return (
              <text
                key={`label-${index}`}
                x={point.x}
                y={height - 12}
                textAnchor="middle"
                fontSize="11"
                fill="#536587"
              >
                {formatDateLabel(point.item[xAxisKey])}
              </text>
            );
          })}
        </svg>

        {chartData.length === 0 && (
          <Typography
            sx={{ textAlign: "center", color: "text.secondary", py: 2 }}
          >
            No spending data available for this period.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
