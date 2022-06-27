import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter.js";
import "./Expenses.css";

function Expenses({ expenses, setExpenses }) {
  const [filterDate, setFilterDate] = useState("");
  let newFilteredArr = expenses.filter(
    (obj) => obj.date.split("-")[0] === filterDate
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterDate={filterDate} setFilterDate={setFilterDate} />
        {newFilteredArr.length > 0
          ? newFilteredArr.map((obj) => (
              <ExpenseItem
                expenses={expenses}
                setExpenses={setExpenses}
                key={Math.random()}
                title={obj.title}
                amount={obj.amount}
                date={obj.date}
              />
            ))
          : expenses.map((obj) => (
              <ExpenseItem
                expenses={expenses}
                setExpenses={setExpenses}
                key={Math.random()}
                title={obj.title}
                amount={obj.amount}
                date={obj.date}
              />
            ))}
      </Card>
    </div>
  );
}

export default Expenses;
