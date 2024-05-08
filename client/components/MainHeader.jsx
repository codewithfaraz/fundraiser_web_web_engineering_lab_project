"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import classes from "./MainHeader.module.css";
export default function MainHeader() {
  const isUserLogedIn = useSelector((state) => state.login.isUserLogedIn);
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
            <Link href="/investnow" className={classes["navbar-list__link"]}>
              Invest now
            </Link>
          </li>
          <li className={classes["navbar-list__item"]}>
            <Link href="/add-project" className={classes["navbar-list__link"]}>
              Start a project
            </Link>
          </li>

          <li className={classes["navbar-list__item"]}>
            <Link href="/about-us" className={classes["navbar-list__link"]}>
              About us
            </Link>
          </li>
          {!isUserLogedIn ? (
            <li className={`${classes["navbar-list__item"]}`}>
              <Link
                href="/login"
                className={`${classes["navbar-list__link"]} ${classes.login__btn}`}
              >
                Login
              </Link>
            </li>
          ) : (
            <Link href="/user-profile">Account</Link>
          )}
        </ul>
      </nav>
    </header>
  );
}
