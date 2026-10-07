import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {},
};
const setSessionData = (state, action) => {
  state.session = action.payload?.session || {};
};

export const userSessionDataSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUserSessionData: setSessionData,
  },
});

export const { setUserSessionData } = userSessionDataSlice.actions;

export default userSessionDataSlice.reducer;
