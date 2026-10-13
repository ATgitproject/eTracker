"use client";

import {
  GridFooterContainer,
  useGridApiContext,
  useGridSelector,
  gridPageSelector,
  gridPageCountSelector,
} from "@mui/x-data-grid";
import {
  Add,
  EditOutlined,
  VisibilityOutlined,
  Delete,
  Download,
} from "@mui/icons-material";

export const buildColumns = (columns = []) =>
  columns
    .filter((column) => !column.hide)
    .map((column) => ({
      field: column.entity_field_name,
      headerName: column.col_name,
      flex: column.flex ?? 1,
      minWidth: 120,
      hasIcon: column.hasIcon ?? false,
      hasIconColor: column.hasIconColor ?? false,
      hasTextColor: column.hasTextColor ?? false,
      hasProgress: column.hasProgress ?? false,
      compare_field_name: column.compare_field_name,
      isAmount: column.isAmount ?? false,
      isStatus: column.isStatus ?? false,
      isType: column.isType ?? false,
      colType: column.colType,
      sx: column.sx ?? {},
    }));

export const formatRows = (records = [], columns = []) => {
  return records.map((record) => {
    const row = {
      id: record.id,
    };

    columns.forEach((column) => {
      const fieldName = column.entity_field_name;
      const entityFieldName = column.entity_field_name ?? "";

      row[fieldName] = record?.[entityFieldName] ?? "";
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

export const formatDateValue = (value, colType) => {
  const type = String(colType ?? "").toLowerCase();

  if (!value || !["date", "datetime"].includes(type)) {
    return value ?? "";
  }

  const dateString = String(value);

  if (type === "date") {
    const dateOnly = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);

    if (dateOnly) {
      const [, year, month, day] = dateOnly;
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        timeZone: "UTC",
      }).format(new Date(Date.UTC(+year, +month - 1, +day)));
    }
  }

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const options =
    type === "date"
      ? {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }
      : {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};
export const TOOLBAR_ICONS = {
  add: Add,
  edit: EditOutlined,
  view: VisibilityOutlined,
  delete: Delete,
  download: Download,
};

export const SELECTION_ACTIONS = ["edit", "view", "delete"];

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

export const getStatusBgColor = (status) => {
  if (status === "Active") {
    return "#DCFCE7";
  }
  if (status === "On Track") {
    return "#DCFCE7";
  }
  if (status === "Over Budget") {
    return "#FEE2E2";
  } else {
    return "#FEE2E2";
  }
};

export const getStatusColor = (status) => {
  if (status === "Active") {
    return "#22C55E";
  }
  if (status === "On Track") {
    return "#22C55E";
  }
  if (status === "Over Budget") {
    return "#EF4444";
  } else {
    return "#EF4444";
  }
};

export const getTypeBgColor = (type) => {
  if (type === "Income") {
    return "#DCFCE7";
  } else if (type === "Transfer") {
    return "#DBEAFE";
  } else if (type === "Entertainment") {
    return "#FCE7EC";
  } else if (type === "Utilities" || type === "Shopping") {
    return "#EEE8FE";
  } else {
    return "#FEE2E2";
  }
};

export const getTypeColor = (type) => {
  if (type === "Income") {
    return "#22C55E";
  } else if (type === "Transfer") {
    return "#3B82F6";
  } else if (type === "Entertainment") {
    return "#DC2626";
  } else if (type === "Utilities" || type === "Shopping") {
    return "#6D28D9";
  } else {
    return "#EF4444";
  }
};
