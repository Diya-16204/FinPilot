import { useState } from "react";
import "./modifyExpense.css";

const DeleteExpense = () => {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const token = localStorage.getItem("token"); // ✅ check login
    if (!token) {
      setMessage("Guest mode: Cannot delete expense.");
      return;
    }

    const confirm = window.confirm("Are you sure you want to delete this expense?");
    if (!confirm) return;

    try {
      const res = await fetch("http://127.0.0.1:5000/expenses/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ send token
        },
        body: JSON.stringify({ date }), // ✅ backend will delete by date
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Expense deleted successfully!");
        setDate("");
      } else {
        setMessage(data.error || "Failed to delete expense");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error deleting expense");
    }
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
