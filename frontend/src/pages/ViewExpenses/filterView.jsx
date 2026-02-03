import { useEffect, useState } from "react";
import "./viewExpense.css";

const FilterView = () => {
  const [expenses, setExpenses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        setExpenses([]);
        setFiltered([]);
        return;
      }

      try {
        const res = await fetch("http://127.0.0.1:5000/expenses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setExpenses(data);
          setFiltered(data);
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

  // ✅ Recent filter
  const recent = () => {
    const sorted = [...expenses].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    const lastTen = sorted.length <= 10 ? sorted : sorted.slice(0, 10);
    setFiltered(lastTen);
  };

  // ✅ Custom date range filter
  const customRange = () => {
    if (!fromDate || !toDate) {
      alert("Please select both From and To dates");
      return;
    }
    const from = new Date(fromDate);
    const to = new Date(toDate);

    if (to < from) {
      alert("To date cannot be earlier than From date");
      return;
    }

    const filteredRange = expenses.filter(e => {
      const d = new Date(e.date);
      return d >= from && d <= to;
    });

    setFiltered(filteredRange);
  };

  return (
    <div className="filter-page">
      <h3>Filtered Expenses</h3>
      <div className="filter-buttons">
        <button onClick={recent}>Recent</button>
        <div className="date-range">
          <input
            type="date"
            value={fromDate}
            onChange={e => setFromDate(e.target.value)}
          />
          <input
            type="date"
            value={toDate}
            onChange={e => setToDate(e.target.value)}
          />
          <button onClick={customRange}>Custom Dates</button>
        </div>
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
