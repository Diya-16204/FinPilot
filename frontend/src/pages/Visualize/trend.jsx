import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./visualizeCharts.css";

const VisualizeTrends = () => {
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
          // ✅ Group by month
          const grouped = data.reduce((acc, exp) => {
            const month = new Date(exp.date).toLocaleString("default", { month: "short" });
            acc[month] = (acc[month] || 0) + exp.amount;
            return acc;
          }, {});
          const formatted = Object.entries(grouped).map(([month, expense]) => ({ month, expense }));
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
      <h2>Trends Visualization</h2>
      <div className="chart-container">
        <LineChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="expense" stroke="#8884d8" />
        </LineChart>
      </div>
    </section>
  );
};

export default VisualizeTrends;
