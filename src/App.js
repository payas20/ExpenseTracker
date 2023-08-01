import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  // const expenses = [
  //   {
  //     title: "Car Insurance",
  //     amount: 289,
  //     date: new Date(2023, 2, 28),
  //   },
  //   {
  //     title: "Car Insurance1",
  //     amount: 289,
  //     date: new Date(2022, 2, 28),
  //   },
  //   {
  //     title: "Car Insurance2",
  //     amount: 289,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     title: "Car Insurance3",
  //     amount: 289,
  //     date: new Date(2020, 2, 28),
  //   },
  // ];

  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    // const expenseArray = expenses;
    // expenseArray.push(expenseData);
    // console.log(expenseArray);
    setExpenses((prevExpenses) => {
      return [ expenseData, ...prevExpenses];
    });
    console.log(expenseData);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
