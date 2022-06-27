import React from "react";
import "./ExpenseDate.css";
function ExpenseDate({ date }) {
  const [year, month, day] = date.split("-");
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>

      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
