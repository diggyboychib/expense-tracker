import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense({ setExpenses }) {
  return (
    <div className="new-expense">
      <ExpenseForm setExpenses={setExpenses} />
    </div>
  );
}

export default NewExpense;
