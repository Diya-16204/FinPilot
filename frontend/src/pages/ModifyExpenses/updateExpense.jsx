import { useState } from "react";
import "./modifyExpense.css";

const UpdateExpense = () => {
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
      .then(data => setMessage(data.message || data.error));
  };

  return (
    <div className="update-page">
      <h3>Update Expense</h3>
      <input placeholder="Date" value={date} onChange={e => setDate(e.target.value)} />
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateExpense;
