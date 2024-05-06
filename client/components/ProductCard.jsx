import classes from "./ProductCard.module.css";
export default function ProductCard(props) {
  return (
    <>
      <li style={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.card}>
          <p>category</p>
          <img src="/assets/download.png" />
          <h3>Title</h3>
          <button>Invest</button>
        </div>
      </li>
    </>
  );
}
