import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((obj) => (
        <ExpenseItem
          key={obj.id}
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
