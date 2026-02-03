import { useEffect, useState } from "react";
import "./expensePrediction.css";

const ExpenseForecast = () => {
  const [expenses, setExpenses] = useState([]);
  const [dailyAvg, setDailyAvg] = useState(0);
  const [balance, setBalance] = useState("");
  const [daysRemaining, setDaysRemaining] = useState(null);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await fetch("http://127.0.0.1:5000/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setExpenses(data);
    }
    fetchExpenses();
  }, []);

  useEffect(() => {
    if (expenses.length > 0) {
      const total = expenses.reduce((sum, e) => sum + e.amount, 0);
      const uniqueDates = new Set(expenses.map(e => e.date)).size;
      const avg = total / uniqueDates;
      setDailyAvg(avg);
    }
  }, [expenses]);

  const handlePredict = () => {
    if (!balance || dailyAvg === 0) return;
    const days = balance / dailyAvg;
    setDaysRemaining(days);
  };

  return (
    <div className="prediction-page">
      <h2>Balance Forecast</h2>
      <p>Average Daily Spending: ₹{dailyAvg.toFixed(2)}</p>

      <input
        type="number"
        placeholder="Enter current balance"
        value={balance}
        onChange={e => setBalance(e.target.value)}
      />
      <button onClick={handlePredict}>Predict</button>

      {daysRemaining !== null && (
        <h3>
          With ₹{balance}, your money will last approximately{" "}
          {Math.floor(daysRemaining)} days.
        </h3>
      )}
    </div>
  );
};

export default ExpenseForecast;
