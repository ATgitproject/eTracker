"use client";

import React, { useEffect, useState } from "react";

import {
  Card,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Avatar,
} from "@mui/material";

import {
  HomeOutlined,
  RestaurantOutlined,
  DirectionsCarOutlined,
  SportsEsportsOutlined,
  BoltOutlined,
  MoreHorizOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import "./TableComponent.scss";
import { getData } from "../../../services/dataService";

const ICONS = {
  home: HomeOutlined,
  food: RestaurantOutlined,
  shopping: ShoppingCartOutlined,
  transport: DirectionsCarOutlined,
  entertainment: SportsEsportsOutlined,
  utilities: BoltOutlined,
  others: MoreHorizOutlined,
};

const CATEGORY_MAP = {
  // Food
  "30000000-0000-0000-0000-000000000001": {
    name: "Food",
    icon: "food",
    color: "#16A34A",
    background: "#E8F8EE",
  },

  // Shopping
  "30000000-0000-0000-0000-000000000002": {
    name: "Shopping",
    icon: "shopping",
    color: "#F97316",
    background: "#FFF0E8",
  },

  // Transport
  "30000000-0000-0000-0000-000000000003": {
    name: "Transport",
    icon: "transport",
    color: "#2563EB",
    background: "#EAF2FF",
  },

  // Utilities
  "30000000-0000-0000-0000-000000000004": {
    name: "Utilities",
    icon: "utilities",
    color: "#EAB308",
    background: "#FFF8DD",
  },

  // Entertainment
  "30000000-0000-0000-0000-000000000005": {
    name: "Entertainment",
    icon: "entertainment",
    color: "#F97316",
    background: "#FFF0E8",
  },

  "30000000-0000-0000-0000-000000000006": {
    name: "Entertainment",
    icon: "entertainment",
    color: "#F97316",
    background: "#FFF0E8",
  },

  // Income
  "30000000-0000-0000-0000-000000000007": {
    name: "Income",
    icon: "home",
    color: "#7C3AED",
    background: "#F1EBFF",
  },
};

const TableComponent = ({
  title,
  header = [],
  data = [],
  actionLabel,
  variant = "default",
  className = "",
  fetchtableObj,
}) => {
  const [tableData, setTableData] = useState(data);
  const [loading, setLoading] = useState(false);

  /**
   * Get icon component
   */
  const getIcon = (icon) => {
    if (!icon) {
      return MoreHorizOutlined;
    }

    return (
      ICONS[icon] || ICONS[String(icon).toLowerCase()] || MoreHorizOutlined
    );
  };

  /**
   * Transform API transaction into table format
   */
  const transformTransaction = (transaction) => {
    const category = CATEGORY_MAP[transaction.category_id] || {
      name: "Others",
      icon: "others",
      color: "#667085",
      background: "#F0F1F3",
    };

    const amount = Number(transaction.amount || 0);

    const isIncome = transaction.transaction_type === "income";

    const formattedDate = transaction.transaction_date
      ? new Date(transaction.transaction_date).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

    return {
      ...transaction,

      type: transaction.transaction_type,

      category: category.name,
      categoryColor: category.color,
      categoryBackground: category.background,
      icon: category.icon,

      date: formattedDate,

      amount: `${isIncome ? "+" : "-"}₹${amount.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
    };
  };

  /**
   * Fetch table data
   */
  const fetchTableData = async () => {
    if (!fetchtableObj?.objName) {
      return;
    }

    try {
      setLoading(true);

      const result = await getData({
        objName: fetchtableObj.objName,
        filterCondition: fetchtableObj.filterCondition,
        recordCount: fetchtableObj.recordCount,
        sortOrder: fetchtableObj.sortOrder || "DESC",
      });

      const records = Array.isArray(result?.data) ? result.data : [];

      const transformedData = records.map(transformTransaction);

      setTableData(transformedData);
    } catch (error) {
      console.error("Failed to fetch table data:", error);

      setTableData([]);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch whenever table configuration changes
   */
  useEffect(() => {
    if (fetchtableObj?.objName) {
      fetchTableData();
    } else {
      setTableData(data);
    }
  }, [fetchtableObj, data]);

  /**
   * Render individual table cell
   */
  const renderCell = (column, row) => {
    const value = row[column.key];

    /**
     * Description
     */
    if (column.key === "description") {
      const Icon = getIcon(row.icon);

      return (
        <Box className="table-component__description">
          <Avatar
            variant="rounded"
            className="table-component__transaction-icon"
            sx={{
              backgroundColor: row.categoryBackground || "#F0F1F3",
              color: row.categoryColor || "#667085",
            }}
          >
            <Icon />
          </Avatar>

          <Typography className="table-component__description-text">
            {value}
          </Typography>
        </Box>
      );
    }

    /**
     * Category
     */
    if (column.key === "category") {
      return (
        <Box
          className="table-component__category"
          sx={{
            color: row.categoryColor || "#16B364",

            backgroundColor: row.categoryColor
              ? `${row.categoryColor}18`
              : "#E9F9EF",
          }}
        >
          {value}
        </Box>
      );
    }

    /**
     * Amount
     */
    if (column.key === "amount") {
      const isIncome = row.type === "income" || String(value).startsWith("+");

      return (
        <Typography
          className={`table-component__amount ${
            isIncome
              ? "table-component__amount--income"
              : "table-component__amount--expense"
          }`}
        >
          {value}
        </Typography>
      );
    }

    /**
     * Date
     */
    if (column.key === "date") {
      return (
        <Typography className="table-component__cell-text">{value}</Typography>
      );
    }

    /**
     * Default
     */
    return (
      <Typography className="table-component__cell-text">
        {value ?? "-"}
      </Typography>
    );
  };

  return (
    <Card
      elevation={0}
      className={`
                table-component
                table-component--${variant}
                ${className}
            `}
    >
      {/* Header */}
      <Box className="table-component__header">
        <Typography className="table-component__title">{title}</Typography>

        {actionLabel && (
          <button type="button" className="table-component__action">
            {actionLabel}
          </button>
        )}
      </Box>

      {/* Table */}
      <TableContainer>
        <Table className="table-component__table" size="small">
          <TableHead>
            <TableRow>
              {header.map((column) => (
                <TableCell
                  key={column.id || column.key}
                  className={`
                                        table-component__head-cell
                                        table-component__head-cell--${column.key}
                                    `}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Loading */}
            {loading ? (
              <TableRow>
                <TableCell colSpan={header.length} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : tableData.length === 0 ? (
              /* Empty */
              <TableRow>
                <TableCell colSpan={header.length} align="center">
                  No transactions found
                </TableCell>
              </TableRow>
            ) : (
              /* Data */
              tableData.map((row, rowIndex) => (
                <TableRow
                  key={row.id || `row-${rowIndex}`}
                  className="table-component__row"
                >
                  {header.map((column) => (
                    <TableCell
                      key={column.id || column.key}
                      className={`
                                                        table-component__body-cell
                                                        table-component__body-cell--${column.key}
                                                    `}
                    >
                      {renderCell(column, row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default TableComponent;
