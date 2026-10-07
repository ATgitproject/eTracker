"use client";
import React, { useEffect, useState } from "react";
import { Card, Box, Typography, CardContent, Grid, Stack } from "@mui/material";
import {
  AccountBalanceWalletOutlined,
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useSelector } from "react-redux";
import "./TilesComponent.scss";
import dayjs from "dayjs";
import { getData } from "../../../services/dataService";
import { getCookie } from "../../../utils/genericUtils";

const icons = {
  "balance-icon": AccountBalanceWalletOutlined,
  "expenses-icon": ArrowDownwardOutlined,
  "income-icon": ArrowUpwardOutlined,
  "savings-icon": TrackChangesOutlined,
};

const TilesComponent = (props) => {
  const { title, fieldid, entity_name, tiles } = props;
  const [tileData, setTileData] = useState(null);
  const lastMonth = dayjs()?.subtract(1, "month")?.format("MMMM");
  const userData = useSelector((state) => state.userSessionData?.session);

  const fetchData = async () => {
    try {
      const results = await getData({
        objName: entity_name,
        filterCondition: {
          field: "user_id",
          operator: "equal",
          value: userData?.id,
        },
      });
      const tileData = results?.data?.[0];
      setTileData(tileData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    entity_name && fetchData();
  }, [entity_name]);

  const formatAmount = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    })?.format(value || 0);

  const getTrendColor = (trend) => {
    if (trend === "Positive") return "success.main";
    if (trend === "Negative") return "error.main";
    return "text.secondary";
  };

  const getTrendIcon = (trend) => {
    if (trend === "Positive") {
      return <TrendingUpIcon fontSize="small" />;
    }
    if (trend === "Negative") {
      return <TrendingDownIcon fontSize="small" />;
    }
    return null;
  };

  return (
    <Grid
      container
      key={fieldid}
      sx={{
        width: "100%",
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        m: "6px",
      }}
    >
      {tiles?.map((tile) => {
        const IconComponent = icons[tile?.icon?.icon_name];
        const tileValue = tileData?.[tile?.entityfield_name];
        const trend = tileData?.[tile?.trend?.trend_label_field_name];
        const percentage = tileData?.[tile?.trend?.trend_percentage_field_name];

        return (
          <Grid item xs={12} sm={6} md={3} key={tile?.key}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 2,
                boxShadow: 1,
                flex: "1 1 0",
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      backgroundColor:
                        tile?.icon?.background_color || "#E3F2FD",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {IconComponent && (
                      <IconComponent
                        sx={{
                          fontSize: 32,
                          color: tile?.icon?.icon_color || "#1976D2",
                        }}
                      />
                    )}
                  </Box>

                  <Box>
                    <Typography variant="body2" color="text.secondary" mb={0.5}>
                      {tile?.tiles_name}
                    </Typography>

                    <Typography variant="h5" fontWeight={600} mb={0.5}>
                      {formatAmount(tileValue)}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={0.5}
                      sx={{
                        color: getTrendColor(trend),
                      }}
                    >
                      {getTrendIcon(trend)}

                      <Typography variant="body2" fontWeight={600}>
                        {Math.abs(percentage || 0)}%
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {trend === "No Change"
                          ? "No change"
                          : `from ${lastMonth}`}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TilesComponent;
