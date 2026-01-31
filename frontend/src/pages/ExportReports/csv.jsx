import "./exportReports.css";
import { downloadFile } from "../../utils/exportUtils.js";

const ExportCSV = () => {
  const handleExport = (range) => {
    const transactions = [
      { date: "2026-01-01", item: "Groceries", amount: 1200 },
      { date: "2026-01-02", item: "Fuel", amount: 1500 },
    ];

    let filtered = transactions;
    if (range === "recent") {
      filtered = transactions.slice(-10);
    }

    const csv = filtered.map(t => `${t.date},${t.item},${t.amount}`).join("\n");

    console.log("Export triggered:", range); // 👈 Debug check
    downloadFile(csv, `transactions_${range}.csv`, "text/csv");
  };

  return (
    <div className="export-page">
      <h2>Export CSV</h2>
      <p>Download your expense reports in CSV format.</p>
      <div className="export-actions">
        <button onClick={() => handleExport("recent")}>Export Recent Transactions</button>
        <button onClick={() => handleExport("week")}>Export Last 1 Week</button>
        <button onClick={() => handleExport("month")}>Export Last 1 Month</button>
        <button onClick={() => handleExport("year")}>Export Last 1 Year</button>
        <button onClick={() => handleExport("custom")}>Export by Custom Date</button>
      </div>
    </div>
  );
};

export default ExportCSV;
