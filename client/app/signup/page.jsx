import { Box, Grid, Stack, TextField, Typography } from "@mui/material";

import Paper from "@mui/material/Paper";
import classes from "./signupPage.module.css";
import Link from "next/link";
export default function Login() {
  return (
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
          <img src="/assets/loginpageimage.png" className={classes.login_img} />
        </Grid>
        <Grid className={classes.right__box} xs={12} sm={6} item>
          <Box component="form" className={classes.form}>
            <h1 className={classes.form__heading}>Growth Grant</h1>
            <Stack spacing={3}>
              <TextField
                label="Username"
                required
                type="text"
                variant="standard"
              />
              <TextField
                label="Email"
                required
                type="email"
                variant="standard"
              />
              <TextField
                label="Password"
                required
                type="password"
                variant="standard"
              />
              <TextField
                label="Confirm Password"
                required
                type="password"
                variant="standard"
              />
              <a href="#" className={classes.submit__btn}>
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
  );
}
