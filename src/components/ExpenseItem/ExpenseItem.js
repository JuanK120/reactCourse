import "./ExpenseItem.css";
import ExpenseDate from '../ExpenseDate/ExpenseDate'

function ExpenseItem(args) {
  return (
    <div className="expense-item">
      <ExpenseDate date={args.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{args.title}</h2>
        <div className="expense-item__price">${args.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
