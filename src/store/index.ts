import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../redux/registerSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
