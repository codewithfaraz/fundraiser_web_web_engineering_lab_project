"use client";
import classes from "./AddProject.module.css";
import { useState } from "react";
import ImagePicker from "@/components/ImagePicker";
import {
  Select,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  TextField,
} from "@mui/material";
const categories = ["Tech", "Education", "Infrastructure"];
export default function BasicSelect() {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          padding: "30px",
          width: "80%",
          marginTop: "20px",
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <FormControl sx={{ width: 150 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            {categories.map((category) => {
              return <MenuItem value={`${category}`}>{category}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <TextField
          sx={{ width: "70%" }}
          // onChange={usernameHandler}
          label="project title"
          required
          type="text"
          variant="outlined"
        />
        <TextField
          sx={{ width: "70%" }}
          // onChange={usernameHandler}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
          required
          type="number"
          variant="outlined"
        />
        <textarea
          style={{ width: "70%" }}
          rows={20}
          placeholder="Description..."
        />
        <ImagePicker name="image" label="Pick Your Image" />
      </Box>
      <a className={classes.submit__btn}>Submit Project</a>
    </>
  );
}
