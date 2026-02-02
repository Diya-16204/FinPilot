import { useEffect, useState } from "react";
import "./viewExpense.css";

const FilterView = () => {
  const [expenses, setExpenses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token"); // ✅ get JWT token
      if (!token) {
        setLoading(false);
        setExpenses([]);
        setFiltered([]);
        return;
      }

      try {
        const res = await fetch("http://127.0.0.1:5000/expenses", {
          headers: { Authorization: `Bearer ${token}` }, // ✅ send token
        });
        const data = await res.json();
        if (res.ok) {
          setExpenses(data);
          setFiltered(data); // ✅ initial view = all expenses
        } else {
          alert(data.error || "Failed to load expenses");
        }
      } catch (err) {
        console.error("Error fetching expenses:", err);
        alert("Error fetching expenses");
      } finally {
        setLoading(false);
      }
    }

    fetchExpenses();
  }, []);

  const recent = () => setFiltered(expenses.slice(-10));

  const weekly = () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    setFiltered(expenses.filter(e => new Date(e.date) >= weekAgo));
  };

  const monthly = () => {
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    setFiltered(expenses.filter(e => new Date(e.date) >= monthAgo));
  };

  return (
    <div className="filter-page">
      <h3>Filtered Expenses</h3>
      <div className="filter-buttons">
        <button onClick={recent}>Recent</button>
        <button onClick={weekly}>Weekly</button>
        <button onClick={monthly}>Monthly</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filtered.length > 0 ? (
        <table>
          <thead>
            <tr><th>Date</th><th>Amount</th><th>Category</th></tr>
          </thead>
          <tbody>
            {filtered.map((e, i) => (
              <tr key={i}>
                <td>{e.date}</td>
                <td>₹{e.amount}</td>
                <td>{e.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses found</p>
      )}
    </div>
  );
};

export default FilterView;
