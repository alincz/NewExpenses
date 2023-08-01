import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""); //am pus string la toate pentru ca asta inapoiaza mereu cand scrie ceva pe input,
  //chiar si la date cand scriem un nr,tot ca pe un string il inapoiaza
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    //pentru ca pagina sa nu se reincarce cand dam sumbit am folosit preventDefault
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData); //cu props am apelat functia onSave... din componenta NewExpense ca sa facem legatura intre componenta ExpenseForm si New.. si asa comunicam de jos in sus cu componentele
    setEnteredAmount(""); //le am invocat pe toate 3 din nou ca
    //atunci cand dam click pe submit sa dispara datele din input si sa
    //fie iar un string gol
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle} //value e folosit ca sa devina inputul gol cand dam click pe submit si sa putem scrie o noua valoare
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={enteredAmount}
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={enteredDate}
              type="date"
              min="2-19-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          {/* comunicam cu componenta NewExpense prin onClick={props.onCancel} 
          cand dam click pe cancel se ascunde formul
          */}
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
