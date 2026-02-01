import { useState } from "react";
import "./modifyExpense.css";

const AddExpense = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    fetch("http://127.0.0.1:5000/expenses/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, amount, category }),
    })
      .then(res => res.json())
      .then(data => setMessage(data.message || data.error))
      .catch(() => setMessage("Error adding expense"));
  };

  return (
    <div className="add-page">
      <h3>Add Expense</h3>
      <input
        placeholder="Date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddExpense;
