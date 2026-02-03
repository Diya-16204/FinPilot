import { useState } from "react";
import "./modifyExpense.css";

const UpdateExpense = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    const token = localStorage.getItem("token"); // ✅ check login
    if (!token) {
      setMessage("Guest mode: Cannot update expense.");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/expenses/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ send token
        },
        body: JSON.stringify({ date, amount, category }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Expense updated successfully!");
        setDate("");
        setAmount("");
        setCategory("");
      } else {
        setMessage(data.error || "Failed to update expense");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error updating expense");
    }
  };

  return (
    <div className="update-page">
      <h3>Update Expense</h3>
      <input
        type="date"   // ✅ Calendar picker
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        type="number" // ✅ numeric input for amount
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateExpense;
