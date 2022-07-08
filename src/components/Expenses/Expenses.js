import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function Expenses(args){
    

    const filterChangeHandler = (dataFilter) => {
        console.log('Expenses.js')
        console.log(dataFilter)
    }

    let expenses = args.list;
    console.log(expenses)
    let expenseItems = [];
    for (let i = 0;i < expenses.length; i++) {
        expenseItems.push(<ExpenseItem key={expenses[i].id}
                                date={expenses[i].date} title={expenses[i].title} amount={expenses[i].amount}>
                            </ExpenseItem>)
    }
    return (
        <div>
            
            <Card className="expenses">
                <ExpensesFilter onFilterChange = {filterChangeHandler}></ExpensesFilter>
                {expenseItems}
            </Card>
        </div>
    )
}

export default Expenses;