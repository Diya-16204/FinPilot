import { useEffect, useState } from "react";
import "./expensePrediction.css";

const ExpenseMonthly = () => {
  const [monthlyAvg, setMonthlyAvg] = useState(null);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await fetch("http://127.0.0.1:5000/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        // ✅ Daily average
        const dailyAvg =
          data.reduce((sum, e) => sum + e.amount, 0) / data.length;
        // ✅ Monthly = dailyAvg * 30
        setMonthlyAvg(dailyAvg * 30);
      }
    }
    fetchExpenses();
  }, []);

  return (
    <div className="prediction-page">
      <h2>Monthly Prediction</h2>
      <p>Predicted monthly expense (daily avg × 30):</p>
      {monthlyAvg && <h3>₹{monthlyAvg.toFixed(2)}</h3>}
    </div>
  );
};

export default ExpenseMonthly;
