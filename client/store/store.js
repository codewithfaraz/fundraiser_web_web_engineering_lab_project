"use client";
import { createSlice, configureStore } from "@reduxjs/toolkit";
//login slice
const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoginSnackBarOpen: false,
    loginSnackbarMessage: "Plz fill the form",
  },
  reducers: {
    closeIsOpen(state) {
      state.isLoginSnackBarOpen = false;
    },
    openIsOpen(state) {
      state.isLoginSnackBarOpen = true;
    },
    setLoginSnackbarMessage(state, action) {
      state.loginSnackbarMessage = action.payload;
    },
  },
});
//signup slice
const signupSlice = createSlice({
  name: "signup",
  initialState: {
    isSignupSnackBarOpen: false,
    signupSnackBarMessage: "plz fill the form",
  },
  reducers: {
    closeIsOpen(state) {
      state.isSignupSnackBarOpen = false;
    },
    openIsOpen(state) {
      state.isSignupSnackBarOpen = true;
    },
    setSignupSnackbarMessage(state, action) {
      state.signupSnackBarMessage = action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
  },
});
export default store;
export const signupActions = signupSlice.actions;
export const loginActions = loginSlice.actions;
