import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
// children ia datele care se afla in componenta
// Card care este utilizata in componenta ExpenseItem
