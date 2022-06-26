import React from "react";
import "./ExpenseDate.css";
function ExpenseDate({ date }) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {date.toLocaleString("en-us", { month: "long" })}
      </div>
      <div className="expense-date__daye">
        {date.toLocaleString("en-us", { day: "2-digit" })}
      </div>
      <div className="expense-date__year">{date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;
