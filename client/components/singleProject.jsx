import classes from "./SingleProject.module.css";
export default function SingleProject(props) {
  return (
    <li className={classes.list__item}>
      <h3>{props.title}</h3>
      <h5>{props.category}</h5>
      <h5>${props.amount}</h5>
    </li>
  );
}
