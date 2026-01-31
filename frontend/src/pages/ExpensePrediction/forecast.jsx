import { useEffect, useState } from "react";
import "./expensePrediction.css";

const ExpenseForecast = () => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/predict")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch predictions");
        }
        return res.json();
      })
      .then(data => {
        console.log("Fetched predictions:", data); // 👈 Debug log
        setPredictions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching predictions:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="prediction-page">
      <h2>Expense Forecast</h2>
      <p>Predicted expenses for the next 30 days:</p>

      {loading && <p>Loading predictions...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && predictions.length > 0 ? (
        <ul>
          {predictions.map((p, idx) => (
            <li key={idx}>
              {p.ds}: ₹
              {p.yhat ? p.yhat.toFixed(2) : "N/A"} (range:{" "}
              {p.yhat_lower ? p.yhat_lower.toFixed(2) : "N/A"} –{" "}
              {p.yhat_upper ? p.yhat_upper.toFixed(2) : "N/A"})
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>No predictions available.</p>
      )}
    </div>
  );
};

export default ExpenseForecast;
