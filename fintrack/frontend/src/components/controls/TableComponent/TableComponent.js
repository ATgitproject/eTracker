"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import {
  CustomPagination,
  tableStyles,
  buildColumns,
  TOOLBAR_ICONS,
  formatDateValue,
} from "./utils/TableUtils";
import {
  ShoppingCart,
  Utensils,
  Zap,
  CarFront,
  House,
  HeartPulse,
  BriefcaseBusiness,
  Plane,
  Gamepad2,
  Wallet,
  GraduationCap,
  Gift,
} from "lucide-react";
import useTableData from "./hooks/useTableData";
import useTableActions from "./hooks/useTableActions";
import useTableToolbars from "./hooks/useTableToolbars";
import { RowContextualMenu } from "./rowContextualMenu";
import FilterSearch from "./utils/filterSearch";
import { useSelector } from "react-redux";
const ICON_MAP = {
  "shopping-cart": ShoppingCart,
  shopping_bag: ShoppingCart,
  utensils: Utensils,
  restaurant: Utensils,
  zap: Zap,
  bolt: Zap,
  "car-front": CarFront,
  directions_car: CarFront,
  house: House,
  home: House,
  "heart-pulse": HeartPulse,
  "briefcase-business": BriefcaseBusiness,
  plane: Plane,
  "gamepad-2": Gamepad2,
  movie: Gamepad2,
  wallet: Wallet,
  "graduation-cap": GraduationCap,
  gift: Gift,
};
const TableComponent = ({
  entityName: entityNameProp,
  entity_name,
  columns: columnsProp = [],
  toolbars: toolbarsProp = [],
  filters: filtersConfig,
  showPageComponent,
  onPageToolbarChange,
  enableViewMore,
  tableTitle,
  onRefetchReady,
}) => {
  const [conditions, setConditions] = useState([]);
  const [refreshList, setRefreshList] = useState(null);
  const router = useRouter();
  const entityName = entityNameProp ?? entity_name;
  const columns = columnsProp;
  const toolbars = toolbarsProp;

  const refreshData = useSelector((state) => state.tableData.refreshData);

  const formattedColumns = useMemo(() => {
    return buildColumns(columns).map((column) => {
      const isBudgetProgress = Boolean(
        column.hasProgress && column.compare_field_name,
      );

      const isDateColumn = ["date", "datetime"].includes(
        String(column.colType || "").toLowerCase(),
      );

      return {
        ...column,

        ...(isBudgetProgress && {
          minWidth: 260,
          flex: 2,
        }),

        renderCell: (params) => {
          const row = params.row;

          const displayValue = isDateColumn
            ? formatDateValue(params.value, column.colType)
            : (params.value ?? "");

          if (isDateColumn) {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography variant="body2">{displayValue}</Typography>
              </Box>
            );
          }
          if (isBudgetProgress) {
            const { value_field, max_field, percentage_field, color_field } =
              column.compare_field_name;

            const spent = Number(row[value_field]) || 0;
            const budget = Number(row[max_field]) || 0;

            const percentage =
              row[percentage_field] != null
                ? Number(row[percentage_field]) || 0
                : budget > 0
                  ? (spent / budget) * 100
                  : 0;

            const color = row[color_field] || "#6842FF";

            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    minWidth: 115,
                    whiteSpace: "nowrap",
                    color: "#26345D",
                    fontSize: 13,
                  }}
                >
                  ${spent.toLocaleString("en-US")} / $
                  {budget.toLocaleString("en-US")}
                </Typography>

                <Box
                  sx={{
                    flex: 1,
                    minWidth: 40,
                    height: 8,
                    borderRadius: 10,
                    bgcolor: "#E9ECF3",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${Math.min(Math.max(percentage, 0), 100)}%`,
                      height: "100%",
                      bgcolor: color,
                      borderRadius: 10,
                      transition: "width 250ms ease",
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    minWidth: 44,
                    textAlign: "right",
                    color: "#42557F",
                    fontSize: 12,
                  }}
                >
                  {percentage.toFixed(1)}%
                </Typography>
              </Box>
            );
          }

          const iconName =
            row[column.iconFieldName || "icon"] || row.category_icon;

          const Icon = column.hasIcon ? ICON_MAP[iconName] : null;

          const color =
            row[column.colorFieldName || "color"] ||
            row.category_color ||
            "#6842FF";

          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                width: "100%",
                height: "100%",
                m: 0,
                p: 0,
              }}
            >
              {column.hasIcon && Icon && (
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: column.hasIconColor ? color : "#6842FF",
                    bgcolor: column.hasIconColor ? `${color}20` : "#F1EDFF",
                  }}
                >
                  <Icon size={18} />
                </Box>
              )}

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  color: "inherit",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  ...column.sx,
                }}
              >
                {displayValue}
              </Typography>
            </Box>
          );
        },
      };
    });
  }, [columns]);

  const {
    rows = [],
    loading,
    fetchData,
  } = useTableData({
    entityName,
    columns,
    conditions,
  });

  const { pageToolbars, gridToolbars, rowToolbars } = useTableToolbars(
    toolbars,
    [],
  );

  const { handleToolbarClick } = useTableActions({
    showPageComponent,
    selectedRows: [],
  });

  useEffect(() => {
    pageToolbars?.length && onPageToolbarChange?.(pageToolbars);
  }, [pageToolbars, onPageToolbarChange]);

  const handleViewMore = useCallback(() => {
    const redirectPage = enableViewMore?.redirectPage;

    if (typeof redirectPage === "string" && redirectPage.startsWith("/")) {
      router.push(redirectPage);
    }
  }, [enableViewMore, router]);

  const visibleRows = useMemo(() => {
    const rowLimit = enableViewMore?.restrictRowCount;

    if (!enableViewMore || !Number.isInteger(rowLimit) || rowLimit < 0) {
      return rows;
    }

    return rows.slice(0, rowLimit);
  }, [rows, enableViewMore]);

  useEffect(() => {
    const refresh = refreshData?.[entityName];

    if (refresh?.success) {
      fetchData();
    }
  }, [refreshData, entityName]);

  const renderToolbar = useCallback(
    (toolbar) => {
      const action = String(
        toolbar.toolbar_action ?? toolbar.TOOLBAR_ACTION ?? "",
      ).toLowerCase();

      const Icon = TOOLBAR_ICONS[action];

      return (
        <Button
          key={toolbar.toolbar_id ?? toolbar.TOOLBAR_ID ?? action}
          variant="contained"
          startIcon={Icon ? <Icon /> : null}
          onClick={() => handleToolbarClick(toolbar, [])}
        >
          {toolbar.toolbar_name ?? toolbar.TOOLBAR_NAME}
        </Button>
      );
    },
    [handleToolbarClick],
  );

  const columnsWithActions = useMemo(() => {
    if (!rowToolbars.length) return formattedColumns;

    return [
      ...formattedColumns,
      {
        field: "__rowActions",
        headerName: "",
        width: 56,
        minWidth: 56,
        maxWidth: 56,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        resizable: false,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => (
          <RowContextualMenu
            row={params.row}
            toolbars={rowToolbars}
            onAction={handleToolbarClick}
          />
        ),
      },
    ];
  }, [formattedColumns, rowToolbars, handleToolbarClick]);

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 2px 12px rgba(16, 24, 74, 0.04)",
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 1,
          mb: 1.5,
        }}
      >
        {filtersConfig && (
          <FilterSearch config={filtersConfig} onApply={setConditions} />
        )}
      </Box>

      {enableViewMore && (
        <Button
          variant="text"
          onClick={handleViewMore}
          sx={{
            flexShrink: 0,
            textTransform: "none",
            color: "#5b3df5",
            fontWeight: 500,
          }}
        >
          View All
        </Button>
      )}

      <DataGrid
        rows={visibleRows}
        columns={columnsWithActions}
        loading={loading}
        autoHeight
        hideFooter
        disableRowSelectionOnClick
        disableColumnMenu
        sx={tableStyles}
      />
    </Box>
  );
};

export default TableComponent;
