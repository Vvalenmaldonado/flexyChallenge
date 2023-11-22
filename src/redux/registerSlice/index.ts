import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    fullname: "",
    phone: 0,
    email: "",
    password: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;
