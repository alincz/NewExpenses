import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //asa comunicam de jos in sus cu componentele
      ...enteredExpenseData, //am copiat obiectul pe care il generam in submitHandler din componenta ExpenseForm
      id: Math.random().toString(), //sa primim un id random
    };
    props.onAddExpense(expenseData); //acum comunicam cu App.js
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && ( //dupa ce adaugam un expense sa ascunda inputurile si sa apara butonul
        //Add new Expense pe care daca il apasam apar iar inputurile
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {/* onSaveExpenseData--sa ia datele  puse in inputuri cand se da submit */}
    </div>
  );
};

export default NewExpense;
