import './Expenses.css'
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(args){
    let expenses = args.list;
    console.log(expenses)
    let expenseItems = [];
    for (let i = 0;i < expenses.length; i++) {
        expenseItems.push(<ExpenseItem key={expenses[i].id}
                                date={expenses[i].date} title={expenses[i].title} amount={expenses[i].amount}>
                            </ExpenseItem>)
    }
    return (
        <div className="expenses">
            {expenseItems}
        </div>
    )
}

export default Expenses;