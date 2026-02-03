import { useEffect, useState } from "react";
import "./expensePrediction.css";

const ExpenseYearly = () => {
  const [yearlyAvg, setYearlyAvg] = useState(null);

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
        // ✅ Yearly = dailyAvg * 365
        setYearlyAvg(dailyAvg * 365);
      }
    }
    fetchExpenses();
  }, []);

  return (
    <div className="prediction-page">
      <h2>Yearly Prediction</h2>
      <p>Predicted yearly expense (daily avg × 365):</p>
      {yearlyAvg && <h3>₹{yearlyAvg.toFixed(2)}</h3>}
    </div>
  );
};

export default ExpenseYearly;
