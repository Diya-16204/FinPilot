import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./visualizeCharts.css";

const VisualizeDayWiseTrends = () => {
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
          // ✅ Group by exact day (YYYY-MM-DD)
          const grouped = data.reduce((acc, exp) => {
            const d = new Date(exp.date);
            const key = d.toISOString().split("T")[0]; // YYYY-MM-DD
            acc[key] = (acc[key] || 0) + exp.amount;
            return acc;
          }, {});

          // ✅ Format for Recharts
          const formatted = Object.entries(grouped)
            .map(([day, expense]) => ({ day, expense }))
            .sort((a, b) => new Date(a.day) - new Date(b.day));

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
      <h2>Day-wise Trends</h2>
      <div className="chart-container">
        <LineChart width={700} height={350} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis tickFormatter={(v) => `₹${v}`} />
          <Tooltip formatter={(value) => `₹${value}`} />
          <Legend />
          <Line type="monotone" dataKey="expense" stroke="#ff7300" />
        </LineChart>
      </div>
    </section>
  );
};

export default VisualizeDayWiseTrends;
