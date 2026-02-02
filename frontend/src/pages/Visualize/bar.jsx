import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./visualizeCharts.css";

const VisualizeBar = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://127.0.0.1:5000/expenses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (res.ok) {
          // ✅ Group by category
          const grouped = data.reduce((acc, exp) => {
            acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
            return acc;
          }, {});
          const formatted = Object.entries(grouped).map(([category, amount]) => ({ category, amount }));
          setChartData(formatted);
        }
      } catch (err) {
        console.error("Error fetching expenses:", err);
      }
    }
    fetchExpenses();
  }, []);

  return (
    <section className="visualize-section">
      <h2>Bar Chart Visualization</h2>
      <div className="chart-container">
        <BarChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </div>
    </section>
  );
};

export default VisualizeBar;
