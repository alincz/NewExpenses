import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

//CE AM FACUT AICI SE NUMESTE OUTPUT CONTENT CONDITIONALLY
//Adica randezi content pe baza unei conditii
//What's true about outputting conditional content in React components?
//---you can work with regular ternary expressions of if
//---checks to output or return different results in/from your componnent.

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  } //items l am numit ca asa vreau eu,nu e obligatoriu sa fie numit asa
  //daca nu sunt elemente in anult ala,returneaza <h2>

  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          /* folosim map pentru a reda dinamic componenta ExpenseItem 
       ori de cate ori este creata una noua  */
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
