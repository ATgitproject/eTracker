"use client";
import React from "react";
import {
  Card,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";


const LineChartComponent = ({
  title = "Spending Trend",
  filterLabel,
  xAxisKey = "date",
  dataKey = "amount",
  data = [],
  height = 300,
  showArea = true,
  showPoints = true,
}) => {
  const xAxisData = data.map((item) => item?.[xAxisKey]);

  const seriesData = data.map((item) => {
    const value = Number(item?.[dataKey]);

    return Number.isFinite(value) ? value : 0;
  });

  return (
    <Card elevation={0} className="line-chart-component">
      {/* Header */}
      <Box className="line-chart-component__header">
        <Typography className="line-chart-component__title">{title}</Typography>

        {filterLabel && (
          <FormControl size="small" className="line-chart-component__filter">
            <Select value={filterLabel} displayEmpty>
              <MenuItem value={filterLabel}>{filterLabel}</MenuItem>

              <MenuItem value="Last 7 Days">Last 7 Days</MenuItem>

              <MenuItem value="Last 30 Days">Last 30 Days</MenuItem>

              <MenuItem value="Last 6 Months">Last 6 Months</MenuItem>
            </Select>
          </FormControl>
        )}
      </Box>

      {/* Chart */}
      <Box className="line-chart-component__chart">
        <LineChart
          height={height}
          margin={{
            top: 12,
            right: 20,
            bottom: 38,
            left: 52,
          }}
          xAxis={[
            {
              scaleType: "point",
              data: xAxisData,

              tickLabelStyle: {
                fontSize: 12,
                fill: "#53638A",
              },

              disableLine: true,
              disableTicks: true,
            },
          ]}
          yAxis={[
            {
              width: 45,

              tickLabelStyle: {
                fontSize: 12,
                fill: "#53638A",
              },

              disableLine: true,
              disableTicks: true,

              valueFormatter: (value) => {
                if (value >= 1000) {
                  return `$${value / 1000}K`;
                }

                return `$${value}`;
              },
            },
          ]}
          series={[
            {
              data: seriesData,

              label: "Spending",

              color: "#6546F5",

              curve: "linear",

              area: showArea,

              showMark: showPoints,

              shape: "circle",

              valueFormatter: (value) =>
                `$${Number(value).toLocaleString("en-US")}`,
            },
          ]}
          grid={{
            horizontal: true,
            vertical: false,
          }}
          slotProps={{
            legend: {
              position: {
                vertical: "top",
                horizontal: "center",
              },
              direction: "row",
              padding: 0,
            },
          }}
          sx={{
            /* Axis */
            "& .MuiChartsAxis-line": {
              stroke: "transparent",
            },

            "& .MuiChartsAxis-tick": {
              stroke: "transparent",
            },

            /* Horizontal grid only */
            "& .MuiChartsGrid-line": {
              stroke: "#E4E7EC",
              strokeDasharray: "3 3",
              strokeWidth: 1,
            },

            /* Line */
            "& .MuiLineElement-root": {
              stroke: "#6546F5",
              strokeWidth: 2.5,
            },

            /* Area */
            "& .MuiAreaElement-root": {
              fill: "#6546F5",
              opacity: 0.14,
            },

            /* Points */
            "& .MuiMarkElement-root": {
              fill: "#FFFFFF",
              stroke: "#6546F5",
              strokeWidth: 2,
            },

            /* Legend */
            "& .MuiChartsLegend-series text": {
              fill: "#10184A",
              fontSize: "12px",
            },

            "& .MuiChartsLegend-mark": {
              stroke: "#6546F5",
              fill: "#6546F5",
            },
          }}
        />
      </Box>
    </Card>
  );
};

export default LineChartComponent;
