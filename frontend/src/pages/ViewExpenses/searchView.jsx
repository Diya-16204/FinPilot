import { useEffect, useState } from "react";
import "./viewExpense.css";

const SearchView = () => {
  const [expenses, setExpenses] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token"); // ✅ get JWT token
      if (!token) {
        setLoading(false);
        setExpenses([]);
        setResults([]);
        return;
      }

      try {
        const res = await fetch("http://127.0.0.1:5000/expenses", {
          headers: { Authorization: `Bearer ${token}` }, // ✅ send token
        });
        const data = await res.json();
        if (res.ok) {
          setExpenses(data);
          setResults(data); // ✅ initial view = all expenses
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

  const handleSearch = () => {
    const q = query.toLowerCase();
    const filtered = expenses.filter(
      (e) =>
        e.date.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        String(e.amount).includes(q) // ✅ allow search by amount too
    );
    setResults(filtered);
  };

  return (
    <div className="search-page">
      <h3>Search Expenses</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by date, category, or amount"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <table>
          <thead>
            <tr><th>Date</th><th>Amount</th><th>Category</th></tr>
          </thead>
          <tbody>
            {results.map((e, i) => (
              <tr key={i}>
                <td>{e.date}</td>
                <td>₹{e.amount}</td>
                <td>{e.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No matching expenses found</p>
      )}
    </div>
  );
};

export default SearchView;
