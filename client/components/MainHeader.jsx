import Link from "next/link";
import classes from "./MainHeader.module.css";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.navbar__logo}>
          <h1>
            <Link href="/">Growth Grant</Link>
          </h1>
        </div>
        <ul className={classes["navbar-list"]}>
          <li className={classes["navbar-list__item"]}>
            <a href="" className={classes["navbar-list__link"]}>
              Invest now
            </a>
          </li>
          <li className={classes["navbar-list__item"]}>
            <Link href="/add-project" className={classes["navbar-list__link"]}>
              Start a project
            </Link>
          </li>
          <li className={classes["navbar-list__item"]}>
            <a href="" className={classes["navbar-list__link"]}>
              Category
            </a>
          </li>
          <li className={classes["navbar-list__item"]}>
            <a href=" " className={classes["navbar-list__link"]}>
              About us
            </a>
          </li>
          <li className={`${classes["navbar-list__item"]}`}>
            <a
              href=""
              className={`${classes["navbar-list__link"]} ${classes.login__btn}`}
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
