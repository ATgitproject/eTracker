"use client";
import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const BarChartComponent = ({
  title,
  data = [],
  dataKey = "value",
  xAxisKey = "name",
  height = 280,
  className = "",
}) => {
  const xAxisData = data.map((item) => item[xAxisKey]);

  const chartData = data.map((item) => item[dataKey]);

  return (
    <Card className={`bar-chart-component ${className}`} elevation={0}>
      <CardHeader
        title={
          <Typography className="bar-chart-component__title">
            {title}
          </Typography>
        }
      />

      <CardContent>
        {data.length > 0 ? (
          <BarChart
            height={height}
            xAxis={[
              {
                scaleType: "band",
                data: xAxisData,
              },
            ]}
            series={[
              {
                data: chartData,
                label: "Expenses",
              },
            ]}
            borderRadius={6}
            grid={{
              horizontal: true,
            }}
          />
        ) : (
          <div className="bar-chart-component__empty">No data available</div>
        )}
      </CardContent>
    </Card>
  );
};

export default BarChartComponent;
