import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (args) => {
  let expenseItems = args.listToRender.map((expenses) => (
    <ExpenseItem
      key={expenses.id}
      date={expenses.date}
      title={expenses.title}
      amount={expenses.amount}
    ></ExpenseItem>
  ));

  let expensesContent = (
    <h2 className="expenses-list__fallback">No Expenses Found</h2>
  );

  if (expenseItems.length > 0) {
    expensesContent = expenseItems;
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
