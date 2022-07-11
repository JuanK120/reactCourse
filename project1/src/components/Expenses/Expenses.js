import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses(args) {
  const [filteredYear, setFilteredYear] = useState("-1");

  const filterChangeHandler = (dataFilter) => {
    setFilteredYear(dataFilter);
  };

  const applyFilter = (listOfExpenses) => {
    if (filteredYear == "-1") {
      return listOfExpenses;
    } else {
      return listOfExpenses.filter(
        (expense) => expense.date.getFullYear() == filteredYear
      );
    }
  };

  let expenseslist = applyFilter(args.list);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={expenseslist}></ExpensesChart>
        <ExpensesList listToRender={expenseslist}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
