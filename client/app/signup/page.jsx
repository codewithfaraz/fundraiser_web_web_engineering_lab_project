"use client";
import { useState } from "react";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signupActions } from "@/store/store";
import Paper from "@mui/material/Paper";
import classes from "./signupPage.module.css";
import Link from "next/link";
import DisplaSnackbar from "@/utils/snackbar";
import { signUp } from "@/lib/signup";
export default function Login() {
  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.signup);
  //states
  const [emailInput, setEmailInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmpasswordInput, setConfirmpasswordInput] = useState("");
  const [isValidConfirmpassword, setIsValidConfirmpassword] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  //handlers
  const emailHandler = (event) => {
    setEmailInput(event.target.value);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput));
  };
  const usernameHandler = (event) => {
    setUsernameInput(event.target.value);
  };
  const passwordHandler = (event) => {
    setPasswordInput(event.target.value);
  };
  const confirmpasswordHandler = (event) => {
    setConfirmpasswordInput(event.target.value);
    setIsValidConfirmpassword(passwordInput === event.target.value);
  };
  const signupButtonHandler = (event) => {
    event.preventDefault();
    if (
      isValidEmail &&
      passwordInput.length >= 8 &&
      isValidConfirmpassword &&
      usernameInput.trim().length >= 1
    ) {
      const user = {
        username: usernameInput,
        email: emailInput,
        password: passwordInput,
      };
      let url = "http://127.0.0.1:8000/user/signup";
      signUp(url, user, dispatch);
    } else {
      dispatch(signupActions.openIsOpen());
      dispatch(signupActions.setSignupSnackbarMessage("Plz fill the form"));
    }
  };
  return (
    <>
      <Paper elevation={4} className={classes.form__container}>
        <Grid
          container
          my={2}
          sx={{ height: "100%", padding: "0", margin: "0" }}
          spacing={1}
        >
          <Grid className={classes.left__box} xs={12} sm={6} item>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                marginTop: "40px",
                fontFamily: "'Sedan', serif",
                fontWeight: "500",
              }}
            >
              Welcome
            </Typography>
            <img
              src="/assets/loginpageimage.png"
              className={classes.login_img}
            />
          </Grid>
          <Grid className={classes.right__box} xs={12} sm={6} item>
            <Box component="form" className={classes.form}>
              <h1 className={classes.form__heading}>Growth Grant</h1>
              <Stack spacing={3}>
                <TextField
                  onChange={usernameHandler}
                  label="Username"
                  required
                  type="text"
                  variant="standard"
                />
                <TextField
                  onChange={emailHandler}
                  error={!isValidEmail}
                  label="Email"
                  required
                  type="email"
                  variant="standard"
                />
                <TextField
                  onChange={passwordHandler}
                  label="Password"
                  required
                  type="password"
                  variant="standard"
                />
                <TextField
                  helperText={
                    isValidConfirmpassword ? "" : "Both passwords must be same"
                  }
                  error={!isValidConfirmpassword}
                  onChange={confirmpasswordHandler}
                  label="Confirm Password"
                  required
                  type="password"
                  variant="standard"
                />
                <a
                  href="#"
                  className={classes.submit__btn}
                  onClick={signupButtonHandler}
                >
                  Sign up
                </a>

                <p>
                  Already have account?
                  <Link href="/login">Login</Link>
                </p>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <DisplaSnackbar
        message={signupState.signupSnackBarMessage}
        action={signupActions.closeIsOpen}
        open={signupState.isSignupSnackBarOpen}
      />
    </>
  );
}
