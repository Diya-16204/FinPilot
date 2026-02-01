import { useState } from "react";
import "./modifyExpense.css";


const ModifyExpenses = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = () => {
    fetch("http://127.0.0.1:5000/expenses/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, amount, category }),
    })
      .then(res => res.json())
      .then(data => setMessage(data.message || data.error))
      .catch(err => setMessage("Error updating expense"));
  };

  return (
    <div className="modify-page">
      <h2>Modify Expense</h2>
      <input
        type="text"
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Expense</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ModifyExpenses;
