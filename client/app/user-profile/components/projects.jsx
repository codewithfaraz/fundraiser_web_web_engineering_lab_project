import TextField from "@mui/material/TextField";
import classes from "./project.module.css";
export default function Projects() {
  return (
      <div className={classes.boxx}>
      <h1 className={classes.headin}>Project</h1>

      <h2 className={classes.h_2}>Project Title</h2>
      <div className={classes.dis}>
        <ul className={classes.list__dis}>
          <li className={classes.lis}>Project1</li>
          <a className={classes.submit__btn}>View</a>
        </ul>
      </div>
    </div>
  );
}