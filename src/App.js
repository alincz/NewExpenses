import React, { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //aici am copiat array ul DUMM_EXPENSES cu ajutorul ...prevExpenses si
      //cu toata lugica din functie vrem sa adaugam in array ul initial noile valori cand dam submit
      //si lista noastra devine dinamica
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;

//Aici avem un custome component <Expenses/> care are
//proprietate items ce contine datele din expenses

// Când înveți React ai auzit
// „React este declarativ în loc de imperativ”
// Ce înseamnă asta? Care este diferența dintre amândoi?
//  În termeni simpli, programarea declarativă este atunci când
//  codul tău arată ceea ce vrei să se întâmple.
//  Programarea imperativă a codului arată exact
//  cum să faci ceea ce vrei să se întâmple.
