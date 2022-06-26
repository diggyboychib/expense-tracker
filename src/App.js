import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <div>
      <NewExpense setExpenses={setExpenses} />
      <Expenses expenses={expenses} setExpenses={setExpenses} />;
    </div>
  );
}

export default App;
