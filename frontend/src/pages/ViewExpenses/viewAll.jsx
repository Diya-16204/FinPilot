import { useEffect, useState } from "react";
import "./viewExpense.css";

const ViewAll = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token"); // ✅ check if user is logged in
      if (!token) {
        setLoading(false);
        setExpenses([]); // Guest mode → no DB fetch
        return;
      }

      try {
        const res = await fetch("http://127.0.0.1:5000/expenses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setExpenses(data);
        } else {
          alert(data.error || "Failed to load expenses");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Error fetching expenses");
      } finally {
        setLoading(false);
      }
    }

    fetchExpenses();
  }, []);

  return (
    <div className="viewall-page">
      <h3>All Expenses</h3>
      {loading ? (
        <p>Loading...</p>
      ) : expenses.length > 0 ? (
        <table>
          <thead>
            <tr><th>Date</th><th>Amount</th><th>Category</th></tr>
          </thead>
          <tbody>
            {expenses.map((e, i) => (
              <tr key={i}>
                <td>{e.date}</td>
                <td>₹{e.amount}</td>
                <td>{e.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses found. Add some!</p>
      )}
    </div>
  );
};

export default ViewAll;
