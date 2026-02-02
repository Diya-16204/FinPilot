import "./exportReports.css";
import { downloadFile } from "../../utils/exportUtils.js";
import { useEffect, useState } from "react";
import { filterExpenses } from "../../utils/filterUtils.js";

const ExportCSV = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await fetch("http://127.0.0.1:5000/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setExpenses(data);
    }
    fetchExpenses();
  }, []);

  const handleExport = (range) => {
    const filtered = filterExpenses(expenses, range);
    const csv = filtered.map(t => `${t.date},${t.category},${t.amount}`).join("\n");
    downloadFile(csv, `transactions_${range}.csv`, "text/csv");
  };

  return (
    <div className="export-page">
      <h2>Export CSV</h2>
      <p>Download your expense reports in CSV format.</p>
      <div className="export-actions">
        <button onClick={() => handleExport("recent")}>Export Recent</button>
        <button onClick={() => handleExport("week")}>Export Last Week</button>
        <button onClick={() => handleExport("month")}>Export Last Month</button>
        <button onClick={() => handleExport("year")}>Export Last Year</button>
      </div>
    </div>
  );
};

export default ExportCSV;
