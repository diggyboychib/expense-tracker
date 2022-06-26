import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ date, setExpenses, expenses }) => {
  const [filterDate, setFilterDate] = useState("");
  console.log(expenses);
  console.log("filterdate", filterDate);
  const filterArr = () => {
    const newFilteredArray = expenses.filter(
      (obj) => obj.date.split("-")[0] === filterDate
    );
    console.log("filterarr", newFilteredArray);

    setExpenses(newFilteredArray);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          onChange={(e) => {
            setFilterDate(e.target.value);
            filterArr();
          }}
          value={filterDate}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
