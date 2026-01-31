import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./visualizeCharts.css";

const data = [
  { name: "Food", value: 1200 },
  { name: "Travel", value: 3400 },
  { name: "Shopping", value: 2200 },
  { name: "Bills", value: 1500 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const VisualizePie = () => {
  return (
    <section className="visualize-section">
      <h2>Pie Chart Visualization</h2>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </section>
  );
};

export default VisualizePie;
