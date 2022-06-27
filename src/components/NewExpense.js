import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
function NewExpense({ setExpenses }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm setShowForm={setShowForm} setExpenses={setExpenses} />
      ) : (
        <AddNewExpense setShowForm={setShowForm} />
      )}
    </div>
  );
}

export default NewExpense;
