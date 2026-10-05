"use client";

import React from "react";

import { Card, Box, Typography, LinearProgress } from "@mui/material";

import {
  AccountBalanceWalletOutlined,
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";

import "./TilesComponent.scss";

const ICONS = {
  balance: AccountBalanceWalletOutlined,
  expenses: ArrowDownwardOutlined,
  income: ArrowUpwardOutlined,
  budget: TrackChangesOutlined,
};

const TilesComponent = ({
  title,
  value,
  subtitle,
  trend,
  trendLabel,
  icon = "balance",
  progress,
  progressLabel,
  className = "",
}) => {
  const Icon = ICONS[icon] || AccountBalanceWalletOutlined;

  const iconClass = `tiles-component__icon tiles-component__icon--${icon}`;

  const trendClass =
    trend === "negative"
      ? "tiles-component__trend--negative"
      : trend === "positive"
        ? "tiles-component__trend--positive"
        : "";

  return (
    <Card elevation={0} className={`tiles-component ${className}`}>
      <Box className={iconClass}>
        <Icon />
      </Box>

      <Box className="tiles-component__content">
        <Typography className="tiles-component__title">{title}</Typography>

        <Typography className="tiles-component__value">{value}</Typography>

        {(trendLabel || subtitle) && (
          <Box className="tiles-component__trend-row">
            {trendLabel && (
              <Typography className={`tiles-component__trend ${trendClass}`}>
                {trend === "positive" && "↑"}
                {trend === "negative" && "↓"}

                {trendLabel}
              </Typography>
            )}

            {subtitle && (
              <Typography className="tiles-component__subtitle">
                {subtitle}
              </Typography>
            )}
          </Box>
        )}

        {typeof progress === "number" && (
          <Box className="tiles-component__progress">
            <LinearProgress
              variant="determinate"
              value={Math.min(Math.max(progress, 0), 100)}
            />

            {progressLabel && (
              <Typography className="tiles-component__progress-label">
                {progressLabel}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default TilesComponent;
