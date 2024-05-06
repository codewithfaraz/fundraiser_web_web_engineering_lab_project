"use client";
import { useDispatch } from "react-redux";
import { verifyUser } from "@/lib/actions";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  const dispatch = useDispatch();
  verifyUser(dispatch);
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href="/login">Login</Link>
      <Link href="/signup">signup</Link>
      <Link href="/user-profile">user-profile</Link>
      <Link href="/slider">slider</Link>

    </main>
  );
}
