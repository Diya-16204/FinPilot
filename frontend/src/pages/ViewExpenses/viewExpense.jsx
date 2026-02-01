import { useEffect, useState } from "react";
import "./viewExpense.css"; // in viewExpense.jsx

const ViewExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/expenses")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch expenses");
        }
        return res.json();
      })
      .then(data => {
        console.log("Fetched expenses:", data); // 👈 Debug log
        setExpenses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching expenses:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="expenses-page">
      <h2>All Expenses</h2>

      {loading && <p>Loading expenses...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && expenses.length > 0 ? (
        <table border="1" style={{ margin: "auto", width: "80%" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, idx) => (
              <tr key={idx}>
                <td>{exp.date}</td>
                <td>₹{exp.amount}</td>
                <td>{exp.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && !error && <p>No expenses found.</p>
      )}
    </div>
  );
};

export default ViewExpenses;
