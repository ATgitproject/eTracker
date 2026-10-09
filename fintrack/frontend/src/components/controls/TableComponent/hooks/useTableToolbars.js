"use client";

import { useMemo } from "react";
import { SELECTION_ACTIONS } from "../utils/TableUtils";

const normalizeAction = (toolbar) =>
  String(toolbar.toolbar_action ?? toolbar.TOOLBAR_ACTION ?? "").toLowerCase();

const isButtonToolbar = (toolbar) =>
  (toolbar.isbutton ?? toolbar.ISBUTTON) === true;

const useTableToolbars = (toolbars = [], selectedRows = []) => {
  const sortedToolbars = useMemo(
    () =>
      [...toolbars].sort(
        (a, b) => (a.order ?? a.ORDER ?? 0) - (b.order ?? b.ORDER ?? 0),
      ),
    [toolbars],
  );

  const rowToolbars = useMemo(
    () =>
      sortedToolbars.filter(
        (toolbar) =>
          !isButtonToolbar(toolbar) &&
          SELECTION_ACTIONS.includes(normalizeAction(toolbar)),
      ),
    [sortedToolbars],
  );

  const visibleToolbars = useMemo(
    () =>
      sortedToolbars.filter((toolbar) => {
        const action = normalizeAction(toolbar);

        if (action === "add") return selectedRows.length === 0;

        if (SELECTION_ACTIONS.includes(action)) return false;

        return true;
      }),
    [sortedToolbars, selectedRows.length],
  );

  const pageToolbars = useMemo(
    () => visibleToolbars.filter(isButtonToolbar),
    [visibleToolbars],
  );

  const gridToolbars = useMemo(
    () => visibleToolbars.filter((toolbar) => !isButtonToolbar(toolbar)),
    [visibleToolbars],
  );

  const hasSelectionToolbar = useMemo(
    () =>
      sortedToolbars.some((toolbar) =>
        SELECTION_ACTIONS.includes(normalizeAction(toolbar)),
      ),
    [sortedToolbars],
  );

  return {
    visibleToolbars,
    pageToolbars,
    gridToolbars,
    rowToolbars,
    hasSelectionToolbar,
  };
};

export default useTableToolbars;
