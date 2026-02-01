import { useState } from "react";
import "./modifyExpense.css";

const DeleteExpense = () => {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const res = await fetch("http://127.0.0.1:5000/expenses");
    const data = await res.json();
    const updated = data.filter(e => e.date !== date);

    const confirm = window.confirm("Are you sure you want to delete this expense?");
    if (!confirm) return;

    const saveRes = await fetch("http://127.0.0.1:5000/expenses/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expenses: updated }),
    });

    const result = await saveRes.json();
    setMessage(result.message || "Deleted.");
  };

  return (
    <div className="delete-page">
      <h3>Delete Expense</h3>
      <input placeholder="Date to delete" value={date} onChange={e => setDate(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteExpense;
