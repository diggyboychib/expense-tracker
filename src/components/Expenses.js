import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter.js";
import "./Expenses.css";

function Expenses({ expenses, setExpenses }) {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          date={expenses.date}
          setExpenses={setExpenses}
          expenses={expenses}
        />
        {expenses.map((obj) => (
          <ExpenseItem
            expenses={expenses}
            setExpenses={setExpenses}
            key={obj.id}
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
