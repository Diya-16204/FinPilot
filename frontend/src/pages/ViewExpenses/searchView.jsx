import { useEffect, useState } from "react";
import "./viewExpense.css";

const SearchView = () => {
  const [expenses, setExpenses] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/expenses")
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  const handleSearch = () => {
    const q = query.toLowerCase();
    const filtered = expenses.filter(e =>
      e.date.includes(q) || e.category.toLowerCase().includes(q)
    );
    setResults(filtered);
  };

  return (
    <div className="search-page">
      <h3>Search Expenses</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by date or category"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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
    </div>
  );
};

export default SearchView;
