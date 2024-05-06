import ProductCard from "./ProductCard";
import classes from "./FeaturedProjects.module.css";
export default function FeaturedProjects() {
  return (
    <ul className={classes.list}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ul>
  );
}
