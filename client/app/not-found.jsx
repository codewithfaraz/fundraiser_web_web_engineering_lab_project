import Link from "next/link";
import classes from "./not-found.module.css";
export default function () {
  return (
    <div className={classes.container}>
      <h1 className={classes.not_found_heading}>Page Not found</h1>
      <Link href="/" className={classes.home__btn}>
        Go Home
      </Link>
    </div>
  );
}
