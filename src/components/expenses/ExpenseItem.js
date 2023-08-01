//ExpenseItem este o stateless component(componenta fara state )
//pe care o folosim doar pentru a extrage cateva date din ea

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React from "react";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

//card este un wrapper component(actioneaza ca un invelis pentru cod)
