"use client";

import { Box } from "@mui/material";
import { TOOLBAR_ICONS } from "./utils/TableUtils";
import ButtonComponent from "../ButtonComponent";

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
          <ButtonComponent
            key={toolbar.toolbar_id}
            variant="contained"
            fullWidth={false}
            startIcon={Icon ? <Icon /> : null}
            onClick={() =>
              onToolbarAction?.({
                toolbar,
                selectedRows,
              })
            }
          >
            {toolbar.toolbar_name}
          </ButtonComponent>
        );
      })}
    </Box>
  );
};

export default PageToolbar;
