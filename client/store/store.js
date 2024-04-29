import { createSlice, configureStore } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "login",
  initialState: { isOpen: false },
  reducers: {
    setIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});
export default store;
export const loginActions = loginSlice.actions;
