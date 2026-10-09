"use client";

import { useCallback, useEffect, useMemo } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import {
  CustomPagination,
  tableStyles,
  buildColumns,
  TOOLBAR_ICONS,
} from "./utils/TableUtils";

import useTableData from "./hooks/useTableData";
import useTableActions from "./hooks/useTableActions";
import useTableToolbars from "./hooks/useTableToolbars";
import { RowContextualMenu } from "./rowContextualMenu";

const TableComponent = ({
  entityName: entityNameProp,
  entity_name,
  columns: columnsProp = [],
  toolbars: toolbarsProp = [],
  showPageComponent,
  onPageToolbarChange,
}) => {
  const entityName = entityNameProp ?? entity_name;
  const columns = columnsProp;
  const toolbars = toolbarsProp;

  const formattedColumns = useMemo(() => buildColumns(columns), [columns]);

  const { rows = [] } = useTableData({
    entityName,
    columns,
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
    pageToolbars.length && onPageToolbarChange?.(pageToolbars);
  }, [pageToolbars, onPageToolbarChange]);

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
    <Box sx={{ width: "100%", minWidth: 0 }}>
      {gridToolbars.length > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1.5,
          }}
        >
          {gridToolbars.map(renderToolbar)}
        </Box>
      )}

      <DataGrid
        rows={rows}
        columns={columnsWithActions}
        checkboxSelection={false}
        autoHeight
        disableRowSelectionOnClick
        hideFooterSelectedRowCount
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: 0,
            },
          },
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        slots={{
          footer: CustomPagination,
        }}
        sx={tableStyles}
      />
    </Box>
  );
};

export default TableComponent;
