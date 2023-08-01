import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    // For passing data from child to parent;
    const saveExpenseHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString(),

        }; 
        // console.log(expense);
        props.onAddExpense(expense);
    }

    const [formToggle, setFormToggle] = useState(true);

    const formToggleHandler = () => {
      setFormToggle((val) => !val);
    }

  return (
    <div className='new-expense'>
      { formToggle && <button onClick={formToggleHandler}> Add New Expense </button> }
      { !formToggle && <ExpenseForm onSaveExpenseData = {saveExpenseHandler} onCancel={formToggleHandler}/> }
    </div>
  );
}

export default NewExpense;
