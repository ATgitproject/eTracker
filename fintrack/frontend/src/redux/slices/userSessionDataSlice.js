import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {},
};
const setUserData = (state, action) => {
  state.session = action.payload?.userData || {};
};

export const userSessionDataSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUserSessionData: setUserData,
  },
});

export const { setUserSessionData } = userSessionDataSlice.actions;

export default userSessionDataSlice.reducer;
