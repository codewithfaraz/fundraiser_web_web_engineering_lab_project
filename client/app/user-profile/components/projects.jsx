import TextField from "@mui/material/TextField";
import classes from "./project.module.css";
export default function Projects() {
  return (
    <div className={classes.boxx}>
      <h1 className={classes.headin}>Project</h1>

      <div className={classes.dis}>
        <TextField
          className={classes.pad}
          id="standard-read-only-input"
          label="Title"
          defaultValue="Project1"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          className={classes.pad}
          id="standard-read-only-input"
          label="Category"
          defaultValue="General"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          className={classes.pad}
          id="standard-read-only-input"
          label="description"
          defaultValue=" General Project"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
      </div>
    </div>
  );
}