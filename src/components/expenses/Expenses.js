import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); //pentru a filtra datele dupa an

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* ExpensesFilter e componenta copil si o transmitem catre componenta parinte Expenses.js,selected e o custome component pe care o atribuim prin props tag-ului html  select (value={props.selected}) si 
      am adaugat o aici ca asa apara anul 2020 by default,
      adaugand ExpenseFilter in Card component atunci cand dam submit se salveaza anul impreuna cu toate datele din input */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

// card este un wrapper component(actioneaza ca un invelis pentru cod)

export default Expenses;
