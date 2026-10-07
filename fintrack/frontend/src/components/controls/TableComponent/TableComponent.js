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
  ENTITYNAME,
  COLUMNS = [],
  TOOLBARS = [],
  showPageComponent,
  onPageToolbarChange,
}) => {
  const { rowSelectionModel, setRowSelectionModel, selectedRows } =
    useTableSelection();
  const columns = useMemo(() => buildColumns(COLUMNS), [COLUMNS]);
  const { rows = [] } = useTableData({
    entityName: ENTITYNAME,
    columns: COLUMNS,
  });

  const { pageToolbars, gridToolbars, hasSelectionToolbar } = useTableToolbars(
    TOOLBARS,
    selectedRows,
  );

  const { handleToolbarClick } = useTableActions({
    showPageComponent,
    selectedRows,
  });

  useEffect(() => {
    onPageToolbarChange?.(pageToolbars);
  }, [pageToolbars, onPageToolbarChange]);

  const renderToolbar = (toolbar) => {
    const Icon = TOOLBAR_ICONS[toolbar.TOOLBAR_ACTION];

    return (
      <Button
        key={toolbar.TOOLBAR_ID}
        variant="contained"
        startIcon={Icon ? <Icon /> : null}
        onClick={() => handleToolbarClick(toolbar)}
      >
        {toolbar.TOOLBAR_NAME}
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
        columns={columns}
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
