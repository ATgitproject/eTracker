"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography, MenuItem, Select } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import {
  CustomPagination,
  tableStyles,
  buildColumns,
  TOOLBAR_ICONS,
  formatDateValue,
  getTypeColor,
  getTypeBgColor,
  getStatusColor,
  getStatusBgColor,
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
  Landmark,
  CreditCard,
  Smartphone,
  Banknote,
  FileCheck,
  ArrowLeftRight,
} from "lucide-react";
import useTableData from "./hooks/useTableData";
import useTableActions from "./hooks/useTableActions";
import useTableToolbars from "./hooks/useTableToolbars";
import { RowContextualMenu } from "./rowContextualMenu";
import FilterSearch from "./utils/filterSearch";
import { useSelector } from "react-redux";
import { ICON_MAP } from "./utils/iconList";
import ButtonGroupComponent from "../ButtonGroupComponent";

const TableComponent = ({
  entity_name: entityName,
  parent_entity: parentEntity,
  columns: columnsProp = [],
  toolbars: toolbarsProp = [],
  filters: filtersConfig,
  showPageComponent,
  onPageToolbarChange,
  enableViewMore,
  tableTitle,
  onRefetchReady,
  gridFilter = null,
}) => {
  const [conditions, setConditions] = useState([]);
  const [refreshList, setRefreshList] = useState(null);
  const [gridFilterValue, setGridFilterValue] = useState(
    gridFilter?.defaultFilter,
  );
  const [gridCondition, setGridCondition] = useState([]);
  const router = useRouter();
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

            const color = percentage >= 100 ? "#EF4444" : "#10B981";

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
                    color: percentage >= 100 ? "#EF4444" : "#42557F",
                    fontSize: 12,
                    fontWeight: percentage >= 100 ? 600 : 400,
                  }}
                >
                  {percentage.toFixed(1)}%
                </Typography>
              </Box>
            );
          }

          const iconName = row[column?.hasIcon?.iconFieldName || "icon"];

          const Icon = column.hasIcon ? ICON_MAP[iconName] : null;
          const AmountIcon = column.isAmount ? ICON_MAP?.["amountIcon"] : null;

          const color =
            row[column?.hasColor?.colorFieldName || "color"] ||
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
                  {Icon &&
                    (typeof Icon === "string" ? (
                      <Box
                        component="img"
                        src={Icon}
                        sx={{
                          width: 18,
                          height: 18,
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <Icon size={18} />
                    ))}
                </Box>
              )}

              {column?.isAmount && (
                <Box
                  sx={{
                    width: 15,
                    height: 15,
                    flexShrink: 0,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "inherit",
                    bgcolor: "inherit",
                    gap: 0,
                  }}
                >
                  {AmountIcon &&
                    (typeof AmountIcon === "string" ? (
                      <Box
                        component="img"
                        src={AmountIcon}
                        sx={{
                          width: 18,
                          height: 18,
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <AmountIcon size={18} />
                    ))}
                </Box>
              )}

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  color: column?.isType
                    ? getTypeColor(params.value ?? "")
                    : column?.isStatus
                      ? getStatusColor(params.value ?? "")
                      : "inherit",
                  bgcolor: column?.isType
                    ? getTypeBgColor(params.value ?? "")
                    : column?.isStatus
                      ? getStatusBgColor(params.value ?? "")
                      : undefined,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  padding: "5px",
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
    conditions: [...conditions, ...gridCondition],
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
    const refresh = refreshData?.[parentEntity];

    if (refresh?.success) {
      fetchData();
    }
  }, [refreshData, entityName]);

  useEffect(() => {
    fetchData();
  }, [conditions, gridCondition]);

  const onGridFilterChange = (event, entity_field) => {
    const value = event?.target?.value || event;
    setGridFilterValue(value);
    if (value !== "All") {
      setGridCondition([
        {
          field: entity_field,
          operator: "equal",
          value: value,
        },
      ]);
    } else {
      setGridFilterValue("All");
      setGridCondition([]);
    }
  };

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
        headerName: "Action",
        minWidth: 200,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        resizable: true,
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
      <Box className="filter-box">
        {gridFilter && (
          <Box className="grid-filter">
            <ButtonGroupComponent
              value={gridFilterValue}
              onChange={(event) => {
                onGridFilterChange(event, gridFilter?.entity_field);
              }}
              options={gridFilter?.options}
            />
          </Box>
        )}
        {filtersConfig && (
          <Box className="advance-filter">
            <FilterSearch config={filtersConfig} onApply={setConditions} />
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          mb: 1.5,
          width: "100%",
        }}
      >
        {tableTitle && (
          <Typography
            component="h2"
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: "#10184A",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {tableTitle}
          </Typography>
        )}

        {enableViewMore && (
          <Button
            variant="text"
            onClick={handleViewMore}
            sx={{
              flexShrink: 0,
              textTransform: "none",
              color: "#5b3df5",
              fontWeight: 500,
              minWidth: "auto",
              p: 0,
            }}
          >
            View All
          </Button>
        )}
      </Box>

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
