import { useEffect, useState } from "react";
import "./viewExpense.css";

const ViewAll = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/expenses")
      .then(res => res.json())
      .then(data => setExpenses(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div className="viewall-page">
      <h3>All Expenses</h3>
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
    </div>
  );
};

export default ViewAll;
