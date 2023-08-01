import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const { data: expenses } = { ...props };
  // console.log(expenses);

  const [selectedYear, setSelectedYear] = useState("All");

  let filterInfoText = "2019, 2020, 2021 & 2022";

  if (selectedYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (selectedYear === "2020") {
    filterInfoText = "2019, 2021 & 2022";
  } else if (selectedYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if (selectedYear === "2022") {
    filterInfoText = "2019, 2020 & 2021";
  }

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  let filteredExpenses = expenses;

  if (selectedYear !== "All") {
    filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          year={selectedYear}
          onFilterChange={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p> No Expenses Found </p>
        ) : (
          <>
            <p> Data for years {filterInfoText} is hidden </p>
            <ExpensesChart expenses={filteredExpenses} />
            {filteredExpenses.map((item) => {
              return <ExpenseItem key={item.id} expense={item} />;
            })}
          </>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
