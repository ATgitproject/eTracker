"use client";

import { DataGrid } from "@mui/x-data-grid";
import { CustomPagination, tableStyles, buildColumns } from "./TableUtils";
import useTableData from "./useTableData";

const TableComponent = ({ config }) => {
  const { COLUMNS = [], ENTITYNAME } = config || {};

  const columns = buildColumns(COLUMNS);
  const { rows } = useTableData({
    entityName: ENTITYNAME,
    columns: COLUMNS,
  });

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
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
    </div>
  );
};

export default TableComponent;
