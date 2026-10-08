"use client";

import { Box, Button } from "@mui/material";
import { TOOLBAR_ICONS } from "./utils/TableUtils";

const PageToolbar = ({ toolbars = [], selectedRows = [], onToolbarAction }) => {
  if (!toolbars.length) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 1,
      }}
    >
      {toolbars.map((toolbar) => {
        const action = toolbar.toolbar_action ?? toolbar.TOOLBAR_ACTION;
        const Icon = TOOLBAR_ICONS[action];

        return (
          <Button
            key={toolbar.toolbar_id ?? toolbar.TOOLBAR_ID}
            variant="contained"
            startIcon={Icon ? <Icon /> : null}
            onClick={() =>
              onToolbarAction?.({
                toolbar,
                selectedRows,
              })
            }
          >
            {toolbar.toolbar_name ?? toolbar.TOOLBAR_NAME}
          </Button>
        );
      })}
    </Box>
  );
};

export default PageToolbar;
