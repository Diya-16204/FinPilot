import "./exportReports.css";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
import { filterExpenses } from "../../utils/filterUtils.js";

const ExportExcel = () => {
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
    const worksheet = XLSX.utils.json_to_sheet(filtered);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");
    XLSX.writeFile(workbook, `transactions_${range}.xlsx`);
  };

  return (
    <div className="export-page">
      <h2>Export Excel</h2>
      <p>Download your expense reports in Excel format.</p>
      <div className="export-actions">
        <button onClick={() => handleExport("recent")}>Export Recent</button>
        <button onClick={() => handleExport("week")}>Export Last Week</button>
        <button onClick={() => handleExport("month")}>Export Last Month</button>
        <button onClick={() => handleExport("year")}>Export Last Year</button>
      </div>
    </div>
  );
};

export default ExportExcel;
