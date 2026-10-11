import { useCallback, useEffect, useState } from "react";
import { formatRows } from "../utils/TableUtils";
import { getData } from "@/services/dataService";

const useTableData = ({ entityName, columns, conditions = [] }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (!entityName) {
      setRows([]);
      return;
    }

    try {
      setLoading(true);

      const response = await getData({
        objName: entityName,
        ...(conditions.length > 0 ? { filterCondition: conditions } : {}),
      });

      setRows(formatRows(response?.data || [], columns));
    } catch (error) {
      console.error("Error fetching table data:", error);
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [entityName, columns, conditions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { rows, loading, fetchData };
};

export default useTableData;
