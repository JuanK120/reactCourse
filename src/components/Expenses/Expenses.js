import React from 'react'
import './Expenses.css'
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../Card/Card';

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
        <Card className="expenses">
            {expenseItems}
        </Card>
    )
}

export default Expenses;