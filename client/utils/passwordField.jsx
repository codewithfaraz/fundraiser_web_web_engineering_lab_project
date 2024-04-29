"use client";
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Visibility,
  VisibilityOff,
} from "@mui/material";
import { useState } from "react";
export default function PasswordField() {
  const [showPassword, setShowPassord] = useState(false);
  const handleClickShowPassword = () => {};
  const handleMouseDownPassword = () => {};

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
