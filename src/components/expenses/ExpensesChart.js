import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //Trecem prin toate cheltuielile pentru a le aduna ,pentru fiecare luna in parte si atribuim valorile
  //lunilor corespunzatoare,punctelor de date corespunzatoare din chartDataPoints
  //dupa acest for loop ,vom avea inca acest array,dar acum valorile nu o sa mai fie 0
  //in schimb acestea vor avea valorile insumate pentru cheltuielile lunii respective.
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //incepe de la 0 ==> January ==> 0
    chartDataPoints[expenseMonth].value += expense.amount; //vreau sa adaug suma cheltuielilor, astfel incat sa cresc valoarea unei anumite luni cu suma respectiva
  }

  return (
    <div>
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
};

export default ExpensesChart;
