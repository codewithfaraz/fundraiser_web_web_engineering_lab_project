import TextField from "@mui/material/TextField";
import classes from "./profile.module.css";
export default function Profile() {
  return (
    <div className={classes.boxx}>
      <h1 className={classes.headin}>Profile</h1>

      <div className={classes.dis}>
        <TextField
          className={classes.pad}
          id="standard-read-only-input"
          label="Username"
          defaultValue="Dawood"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          className={classes.pad}
          id="standard-read-only-input"
          label="Email"
          defaultValue="dawood@gmail.com"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          className={classes.pad}
          id="standard-read-only-input"
          label="Contact"
          defaultValue="923007777666"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
      </div>
    </div>
  );
}