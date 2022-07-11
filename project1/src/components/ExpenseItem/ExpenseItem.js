import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

function ExpenseItem(args) {
  const [title, updateTitle] = useState(args.title);

  const clickHandler = () => {
    console.log(title);
    if (title === args.title) {
      updateTitle('Updated!');
    } else {
      updateTitle(args.title);
    }
    //updateTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={args.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${args.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
