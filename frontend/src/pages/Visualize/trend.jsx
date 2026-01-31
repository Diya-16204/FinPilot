import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./visualizeCharts.css";

const data = [
  { month: "Jan", expense: 2000 },
  { month: "Feb", expense: 2500 },
  { month: "Mar", expense: 1800 },
  { month: "Apr", expense: 3000 },
  { month: "May", expense: 2200 },
];

const VisualizeTrends = () => {
  return (
    <section className="visualize-section">
      <h2>Trends Visualization</h2>
      <div className="chart-container">
        <LineChart width={500} height={300} data={data}>
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
