import React, { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (args) => {
  const [showForm, setShowForm] = useState(false);

  const onShowFormHandler = () => {
    if (!showForm) {
      setShowForm(true);
    } else if (showForm) {
      setShowForm(false);
    }
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    args.onAddExpense(expenseData);
  };

  let contentToRender;

  if (!showForm) {
    contentToRender = (
        <button onClick={onShowFormHandler}>
          Add new Expense
        </button>
    );
  } else if (showForm) {
    contentToRender = (
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onshowForm={onShowFormHandler}></ExpenseForm>
    );
  }

  return <div className="new-expense">{contentToRender}</div>;
};

export default NewExpense;
