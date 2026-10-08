"use client";

import { useEffect, useMemo } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import {
  CustomPagination,
  tableStyles,
  buildColumns,
  TOOLBAR_ICONS,
} from "./utils/TableUtils";

import useTableData from "./hooks/useTableData";
import useTableSelection from "./hooks/useTableSelection";
import useTableActions from "./hooks/useTableActions";
import useTableToolbars from "./hooks/useTableToolbars";

const TableComponent = ({
  entityName: entityNameProp,
  entity_name,
  columns: columnsProp = [],
  toolbars: toolbarsProp = [],
  showPageComponent,
  onPageToolbarChange,
}) => {
  const entityName = entityNameProp ?? entity_name;
  const columns = columnsProp.length ? columnsProp : [];
  const toolbars = toolbarsProp.length ? toolbarsProp : [];

  const { rowSelectionModel, setRowSelectionModel, selectedRows } =
    useTableSelection();
  const formattedColumns = useMemo(() => buildColumns(columns), [columns]);
  const { rows = [] } = useTableData({
    entityName,
    columns,
  });

  const { pageToolbars, gridToolbars, hasSelectionToolbar } = useTableToolbars(
    toolbars,
    selectedRows,
  );

  const { handleToolbarClick } = useTableActions({
    showPageComponent,
    selectedRows,
  });

  useEffect(() => {
    pageToolbars?.length && onPageToolbarChange?.(pageToolbars);
  }, [pageToolbars, onPageToolbarChange]);

  const renderToolbar = (toolbar) => {
    const action = toolbar.toolbar_action ?? toolbar.TOOLBAR_ACTION;
    const Icon = TOOLBAR_ICONS[action];

    return (
      <Button
        key={toolbar.toolbar_id ?? toolbar.TOOLBAR_ID}
        variant="contained"
        startIcon={Icon ? <Icon /> : null}
        onClick={() => handleToolbarClick(toolbar)}
      >
        {toolbar.toolbar_name ?? toolbar.TOOLBAR_NAME}
      </Button>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
      }}
    >
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
        columns={formattedColumns}
        checkboxSelection={hasSelectionToolbar}
        autoHeight
        disableRowSelectionOnClick
        hideFooterSelectedRowCount
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={setRowSelectionModel}
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
