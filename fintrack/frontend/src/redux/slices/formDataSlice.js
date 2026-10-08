import { createSlice } from "@reduxjs/toolkit";
import { isArray, isUndefined } from "lodash";

const initialState = {
  formData: {},
  updateFormData: {},
};

const setData = (state, action) => {
  const data = state;
  let entity = action?.payload?.entity_name;
  const { operation, document } = action?.payload || {};

  if (operation === "deleteObj") {
    delete data.formData[entity];
  } else if (operation === "insert") {
    data.formData = { ...data.formData, ...document };
  } else {
    data.formData = action?.payload;
  }
  state = { ...state, ...data };
};

const updateData = (state, action) => {
  const updateData = state;
  let entity = action?.payload?.entity_name;
  let { key, value, operation } = action?.payload || {};

  if (
    !isArray(action?.payload?.[entity]) &&
    !isUndefined(updateData?.updateFormData?.[entity]) &&
    Object.keys(updateData?.updateFormData?.[entity])?.length
  ) {
    updateData.updateFormData[entity] = {
      ...updateData.updateFormData?.[entity],
      ...action?.payload?.[entity],
    };
  } else {
    if (entity) {
      updateData.updateFormData[entity] = action?.payload?.[entity];
    } else {
      updateData.updateFormData = action?.payload;
    }
  }
  state = { ...state, ...updateData };
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: setData,
    setUpdateFormData: updateData,
  },
});

export const { setFormData, setUpdateFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
