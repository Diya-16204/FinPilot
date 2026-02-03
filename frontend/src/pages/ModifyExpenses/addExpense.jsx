import { useState } from "react";
import "./modifyExpense.css";

const AddExpense = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    const token = localStorage.getItem("token");

    // ✅ Validation: date and amount must not be empty
    if (!date || !amount) {
      setMessage("Please fill in both Date and Amount fields.");
      return;
    }

    if (!token) {
      setMessage("Guest mode: Expense not saved permanently.");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/expenses/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ date, amount, category }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Expense added successfully!");
        setDate("");
        setAmount("");
        setCategory("");
      } else {
        setMessage(data.error || "Failed to add expense");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error adding expense");
    }
  };

  return (
    <div className="add-page">
      <h3>Add Expense</h3>
      <input
        type="date"   // ✅ Calendar picker
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        type="number" // ✅ numeric input
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
