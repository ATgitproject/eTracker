"use client";

import { useCallback, useEffect, useState } from "react";
import { formatRows } from "../utils/TableUtils";
import { getData } from "@/services/dataService";

const useTableData = ({ entityName, columns }) => {
  const [rows, setRows] = useState([]);

  const fetchData = useCallback(async () => {
    if (!entityName) {
      setRows([]);
      return;
    }

    try {
      const response = await getData({
        objName: entityName,
      });

      const records = response?.data || [];

      setRows(formatRows(records, columns));
    } catch (error) {
      console.error("Error fetching table data:", error);
      setRows([]);
    }
  }, [entityName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    rows,
  };
};

export default useTableData;
