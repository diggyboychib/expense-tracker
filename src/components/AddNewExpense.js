import React from "react";
import "./AddNewExpense.css";

function AddNewExpense({ setShowForm }) {
  return (
    <div className="new-expense__actions add_new">
      <button onClick={() => setShowForm(true)}>Add Expense</button>
    </div>
  );
}

export default AddNewExpense;
