import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./visualizeCharts.css";

const data = [
  { category: "Food", amount: 1200 },
  { category: "Travel", amount: 3400 },
  { category: "Shopping", amount: 2200 },
  { category: "Bills", amount: 1500 },
];

const VisualizeBar = () => {
  return (
    <section className="visualize-section">
      <h2>Bar Chart Visualization</h2>
      <div className="chart-container">
        <BarChart width={500} height={300} data={data}>
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
