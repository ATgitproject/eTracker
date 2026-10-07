"use client";

import {
  GridFooterContainer,
  useGridApiContext,
  useGridSelector,
  gridPageSelector,
  gridPageCountSelector,
} from "@mui/x-data-grid";

export const buildColumns = (columns = []) => {
  return [...columns]
    .sort((a, b) => a.ORDER - b.ORDER)
    .map((column) => ({
      field: column.COL_NAME,
      headerName: column.COL_NAME,
      flex: 1,
      minWidth: 150,
    }));
};

export const formatRows = (records = [], columns = []) => {
  return records.map((record) => {
    const row = {
      id: record.id,
    };

    columns.forEach(({ COL_NAME, ENTITYFIELD_NAME }) => {
      row[COL_NAME] = record?.[ENTITYFIELD_NAME] ?? "";
    });

    return row;
  });
};

export const CustomPagination = () => {
  const apiRef = useGridApiContext();

  const currentPage = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const handlePageChange = (page) => {
    apiRef.current.setPage(page);
  };

  if (pageCount <= 1) {
    return null;
  }

  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i);
  }

  return (
    <GridFooterContainer
      sx={{
        minHeight: "56px",
        borderTop: "1px solid #e1e5eb",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "8px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <button
          type="button"
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
          style={{
            width: "36px",
            height: "36px",
            border: "1px solid #e1e5eb",
            borderRadius: "8px",
            background: "#ffffff",
            color: currentPage === 0 ? "#cbd5e1" : "#1e293b",
            cursor: currentPage === 0 ? "default" : "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ‹
        </button>

        {pages.map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              width: "36px",
              height: "36px",
              border: "none",
              borderRadius: "8px",
              background: currentPage === page ? "#5b3df5" : "transparent",
              color: currentPage === page ? "#ffffff" : "#1e293b",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: currentPage === page ? 500 : 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {page + 1}
          </button>
        ))}

        <button
          type="button"
          disabled={currentPage >= pageCount - 1}
          onClick={() => handlePageChange(currentPage + 1)}
          style={{
            width: "36px",
            height: "36px",
            border: "1px solid #e1e5eb",
            borderRadius: "8px",
            background: "#ffffff",
            color: currentPage >= pageCount - 1 ? "#cbd5e1" : "#1e293b",
            cursor: currentPage >= pageCount - 1 ? "default" : "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ›
        </button>
      </div>
    </GridFooterContainer>
  );
};

export const tableStyles = {
  border: "1px solid #e1e5eb",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#ffffff",

  "& .MuiDataGrid-main": {
    borderRadius: "8px",
  },

  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f8fafc",
    borderBottom: "1px solid #e1e5eb",
    minHeight: "52px !important",
  },

  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#f8fafc",
    padding: "0 9px",
    outline: "none !important",
  },

  "& .MuiDataGrid-columnHeaderTitle": {
    fontSize: "14px",
    fontWeight: 500,
    color: "#111827",
  },

  "& .MuiDataGrid-row": {
    minHeight: "48px !important",
    borderBottom: "1px solid #e5e7eb",
  },

  "& .MuiDataGrid-cell": {
    borderBottom: "none",
    padding: "0 16px",
    fontSize: "14px",
    color: "#111827",
    outline: "none !important",
  },

  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#f8faff",
  },

  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "#f3f0ff",
  },

  "& .MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: "#eeeaff",
  },

  "& .MuiCheckbox-root": {
    color: "#9ca3af",
    padding: "6px",
  },

  "& .MuiCheckbox-root.Mui-checked": {
    color: "#5b3df5",
  },

  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },

  "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
    {
      outline: "none",
    },

  "& .MuiDataGrid-columnSeparator": {
    color: "#e5e7eb",
  },

  "& .MuiDataGrid-virtualScroller": {
    scrollbarWidth: "thin",
  },

  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },

  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
    backgroundColor: "#cbd5e1",
    borderRadius: "10px",
  },
};
