import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2022, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expensePrice = 289.6;

  // const expense = {...props.expense};
  // console.log(expense);
  const {
    title: expenseTitle,
    amount: expensePrice,
    date: expenseDate,
  } = { ...props.expense };

  // const [title, setTitle] = useState(expenseTitle);

  // const titleHandler = () => {
  //   setTitle("New title");
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price"> $ {expensePrice} </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
