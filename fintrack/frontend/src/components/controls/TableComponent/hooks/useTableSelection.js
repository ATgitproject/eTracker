"use client";

import { useMemo, useState } from "react";

const useTableSelection = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState({
    type: "include",
    ids: new Set(),
  });

  const selectedRows = useMemo(
    () => Array.from(rowSelectionModel?.ids || []),
    [rowSelectionModel],
  );

  const hasSelection = selectedRows.length > 0;

  return {
    rowSelectionModel,
    setRowSelectionModel,
    selectedRows,
    hasSelection,
  };
};

export default useTableSelection;
