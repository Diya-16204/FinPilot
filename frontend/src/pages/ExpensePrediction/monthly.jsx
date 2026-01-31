import { useEffect, useState } from "react";
import "./expensePrediction.css";

const ExpenseMonthly = () => {
  const [monthly, setMonthly] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/predict/monthly")
      .then(res => res.json())
      .then(data => setMonthly(data.monthly_prediction))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="prediction-page">
      <h2>Monthly Prediction</h2>
      <p>Average monthly expense based on forecast:</p>
      {monthly && <h3>₹{monthly.toFixed(2)}</h3>}
    </div>
  );
};

export default ExpenseMonthly;
