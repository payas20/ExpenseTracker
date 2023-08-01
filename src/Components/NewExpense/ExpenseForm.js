import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");


  // const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: ''
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(title);

    // setUserInput({
    //     ...userInput,
    //     title: event.target.value
    // });

    // console.log(userInput)

    // setUserInput((prevState) => {
    //     return {...prevState, title: event.target.value}
    // });
    // console.log(userInput);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // console.log(amount);

    // setUserInput((prevState) => {
    //     return {...prevState, amount: event.target.value}
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // console.log(date);
    // setUserInput((prevState) => {
    //     return {...prevState, date: event.target.value}
    // });
  };

  // creating a shared handle

  // const inputChangeHandler = (key, value) => {
  //   if (key === "title") {
  //     setTitle(value);
  //   } else if (key === "amount") {
  //     setAmount(value);
  //   } else {
  //     setDate(value);
  //   }
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");

    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new_expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" value={title} onChange={titleChangeHandler} />
          {/* <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} /> */}
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions_main">
          <div className="new-expense__actions">
            <button onClick={props.onCancel}> Cancel </button>
          </div>

          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
