"use client";
import classes from "./AddProject.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import ImagePicker from "@/components/ImagePicker";
import { submitProject } from "@/lib/actions";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  TextField,
} from "@mui/material";
import Link from "next/link";
const categories = ["Tech", "Education", "Infrastructure"];
export default function BasicSelect() {
  const isUserLoggedIn = useSelector((state) => state.login.isUserLoggedIn);
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      {!isUserLoggedIn ? (
        <form className={classes.form} action={submitProject}>
          <FormControl sx={{ width: 150 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              name="category"
              onChange={handleChange}
            >
              {categories.map((category) => {
                return (
                  <MenuItem value={`${category}`} key={category}>
                    {category}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField
            sx={{ width: "70%" }}
            // onChange={usernameHandler}
            label="project title"
            required
            type="text"
            name="title"
            variant="outlined"
          />
          <TextField
            sx={{ width: "70%" }}
            // onChange={usernameHandler}
            label="Amount"
            required
            type="number"
            name="amount"
            variant="outlined"
          />
          <textarea
            style={{ width: "70%" }}
            rows={20}
            name="description"
            placeholder="Description..."
          />
          <ImagePicker name="image" label="Pick Your Image" />
          <button className={classes.submit__btn} href="">
            Submit Project
          </button>
        </form>
      ) : (
        <>
          <h1>Plz first do sign in here</h1>
          <Link href="/login">Login</Link>
        </>
      )}
    </>
  );
}
