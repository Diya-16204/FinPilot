import { useState, useEffect } from "react";
import "./modifyExpense.css";

const DeleteExpense = () => {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [expenses, setExpenses] = useState([]);

  // ✅ Fetch all expenses on load
  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token");
      if (!token) return; // guest mode skip

      try {
        const res = await fetch("http://127.0.0.1:5000/expenses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setExpenses(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchExpenses();
  }, []);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Guest mode: Cannot delete expense.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
    if (!confirmDelete) return;

    try {
      const res = await fetch("http://127.0.0.1:5000/expenses/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ date }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Expense deleted successfully!");
        setDate("");

        // ✅ Mark deleted instantly (line-through effect)
        setExpenses(prev =>
          prev.map(exp =>
            exp.date === date ? { ...exp, deleted: true } : exp
          )
        );

        // ✅ Remove from list after short delay
        setTimeout(() => {
          setExpenses(prev => prev.filter(exp => exp.date !== date));
        }, 1500);
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

      {/* ✅ Calendar input */}
      <input 
        type="date" 
        value={date} 
        onChange={e => setDate(e.target.value)} 
      />

      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}

      {/* ✅ Expense table */}
      <br/>
      <h4>All Expenses</h4>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, idx) => (
            <tr 
              key={idx} 
              style={{
                textDecoration: exp.deleted ? "line-through" : "none",
                color: exp.deleted ? "gray" : "black"
              }}
            >
              <td>{exp.date}</td>
              <td>{exp.category}</td>
              <td>₹{exp.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteExpense;
