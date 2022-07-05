import React, { useState } from "react";

import './ExpenseForm.css'

function ExpenseForm (args){

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submithandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        args.onSaveExpenseData(expenseData)
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }

    return (
        <form onSubmit={submithandler}>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' step='2023-12-31' value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add new Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm