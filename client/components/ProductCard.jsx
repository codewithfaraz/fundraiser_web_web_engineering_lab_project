import classes from "./ProductCard.module.css";
export default function ProductCard(props) {
  return (
    <>
      <li style={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.card}>
          <p>{props.category}</p>
          <img src={`${props.imageURL}`} />
          <h3>{props.title}</h3>
          <button>Invest</button>
        </div>
      </li>
    </>
  );
}
