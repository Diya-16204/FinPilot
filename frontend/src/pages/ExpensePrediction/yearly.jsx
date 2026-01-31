import { useEffect, useState } from "react";
import "./expensePrediction.css";

const ExpenseYearly = () => {
  const [yearly, setYearly] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/predict/yearly")
      .then(res => res.json())
      .then(data => setYearly(data.yearly_prediction))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="prediction-page">
      <h2>Yearly Prediction</h2>
      <p>Total yearly expense estimate:</p>
      {yearly && <h3>₹{yearly.toFixed(2)}</h3>}
    </div>
  );
};

export default ExpenseYearly;
