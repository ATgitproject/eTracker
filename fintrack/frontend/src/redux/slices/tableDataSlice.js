import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refreshData: {},
};

const setRefresh = (state, action) => {
  const data = state;
  const entity = action?.payload?.entity_name;

  if (entity) {
    data.refreshData[entity] = {
      response: action?.payload?.response,
      success: action?.payload?.success,
      entity_name: entity,
    };
  } else {
    data.refreshData = action?.payload;
  }
};

const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    setRefresh,
  },
});

export const { setRefresh: setTableRefresh } = tableDataSlice.actions;

export default tableDataSlice.reducer;
