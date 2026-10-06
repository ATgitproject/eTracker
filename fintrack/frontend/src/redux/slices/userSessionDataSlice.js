import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {},
};
const setUserData = (state, action) => {
  const data = state;
  data.session = action.payload;
  state = { ...state, ...data };
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
