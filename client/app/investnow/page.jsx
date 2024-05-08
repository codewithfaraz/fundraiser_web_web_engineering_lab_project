"use client";
import classes from "./page.module.css";
import FeaturedProjects from "@/components/FeaturedProjects";
export default function InvestPage() {
  return (
    <main className={classes.main}>
      <h1>Tech</h1>
      <FeaturedProjects category="Tech" />
      <h1>Education</h1>
      <FeaturedProjects category="Education" />
      <h1>Infrastructure</h1>
      <FeaturedProjects category="Infrastructure" />
    </main>
  );
}
