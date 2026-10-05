"use client";

import React from "react";

import { Card, CardHeader, CardContent, Typography } from "@mui/material";

import { PieChart } from "@mui/x-charts/PieChart";

import "./PieChartComponent.scss";

const PieChartComponent = ({
  title,
  data = [],
  height = 280,
  className = "",
}) => {
  const series = [
    {
      data: data.map((item, index) => ({
        id: item.id || index,
        value: item.value,
        label: item.name,
        color: item.color,
      })),
      innerRadius: 65,
      outerRadius: 100,
      paddingAngle: 2,
      cornerRadius: 4,
    },
  ];

  return (
    <Card className={`pie-chart-component ${className}`} elevation={0}>
      <CardHeader
        title={
          <Typography className="pie-chart-component__title">
            {title}
          </Typography>
        }
      />

      <CardContent>
        {data.length > 0 ? (
          <PieChart
            series={series}
            height={height}
            slotProps={{
              legend: {
                hidden: false,
              },
            }}
          />
        ) : (
          <div className="pie-chart-component__empty">No data available</div>
        )}
      </CardContent>
    </Card>
  );
};

export default PieChartComponent;
