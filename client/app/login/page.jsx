"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import classes from "./loginPage.module.css";
import { router } from "next/router";
import Link from "next/link";
import DisplaSnackbar from "@/utils/snackbar";
export default function Login() {
  const route = router();
  //states
  const [emailInpt, setEmailinput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("Plz fill the form");
  const [forIsValid, setFormIsValid] = useState(true);
  //handlers
  const onEmailChange = (event) => {
    setEmailinput(event.target.value);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInpt));
  };
  const onPasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const loginButtonHandler = (event) => {
    event.preventDefault();
    if (captcha && isValidEmail && passwordInput.length >= 8) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      route.push("/");
    }
  };
  function snackBarCloseHandler() {
    setIsOpen(false);
  }
  const onChange = (event) => {
    setCaptcha(true);
  };
  return (
    <>
      {/* <PasswordField /> */}
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
              Welcome Back
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
                  label="Email"
                  error={!isValidEmail}
                  helperText={
                    !isValidEmail ? "please enter the correct email" : ""
                  }
                  required
                  type="email"
                  variant="standard"
                  value={emailInpt}
                  onChange={onEmailChange}
                />
                <TextField
                  label="Password"
                  required
                  type="password"
                  variant="standard"
                  value={passwordInput}
                  onChange={onPasswordChange}
                />
                <ReCAPTCHA
                  sitekey="6Lcrz8YpAAAAACESr_K4O3zjCXqStjrMAu_8JaDi"
                  onChange={onChange}
                />
                <button
                  href=""
                  className={classes.submit__btn}
                  onClick={loginButtonHandler}
                >
                  Login
                </button>
                <Typography variant="h6">Or</Typography>
                <p>
                  <Link href="/signup">create account</Link>
                </p>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <DisplaSnackbar
        message={snackBarMessage}
        isOpen={isOpen}
        action={snackBarCloseHandler}
      />
    </>
  );
}
