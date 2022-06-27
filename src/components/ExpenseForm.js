import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm({ setExpenses, setShowForm }) {
  const [expenseObj, setExpenseObj] = useState({
    id: null,
    title: "",
    amount: "",
    date: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    console.log(expenseObj);
    setExpenseObj((prev) => ({
      ...prev,
      id: Math.random(),
    }));
    setExpenses((prev) => [...prev, expenseObj]);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseObj.title}
            onChange={(e) => {
              setExpenseObj((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseObj.amount}
            onChange={(e) => {
              setExpenseObj((prev) => ({
                ...prev,
                amount: e.target.value,
              }));
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseObj.date}
            onChange={(e) => {
              setExpenseObj((prev) => ({
                ...prev,
                date: e.target.value,
              }));
            }}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={() => setShowForm(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
