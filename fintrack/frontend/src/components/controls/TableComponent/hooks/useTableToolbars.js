"use client";

import { useMemo } from "react";
import { SELECTION_ACTIONS } from "../utils/TableUtils";

const useTableToolbars = (toolbars = [], selectedRows = []) => {
  const visibleToolbars = useMemo(() => {
    return [...toolbars]
      .filter((toolbar) => {
        const action = toolbar.TOOLBAR_ACTION;

        if (action === "add") {
          return selectedRows.length === 0;
        }

        if (SELECTION_ACTIONS.includes(action)) {
          return selectedRows.length > 0;
        }

        return true;
      })
      .sort((a, b) => (a.ORDER || 0) - (b.ORDER || 0));
  }, [toolbars, selectedRows.length]);

  const pageToolbars = useMemo(
    () => visibleToolbars.filter((toolbar) => toolbar.ISBUTTON === true),
    [visibleToolbars],
  );

  const gridToolbars = useMemo(
    () => visibleToolbars.filter((toolbar) => toolbar.ISBUTTON !== true),
    [visibleToolbars],
  );

  const hasSelectionToolbar = useMemo(
    () =>
      toolbars.some((toolbar) =>
        SELECTION_ACTIONS.includes(toolbar.TOOLBAR_ACTION),
      ),
    [toolbars],
  );

  return {
    visibleToolbars,
    pageToolbars,
    gridToolbars,
    hasSelectionToolbar,
  };
};

export default useTableToolbars;
