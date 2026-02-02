import { useEffect, useState } from "react";
import "./reports.css";

const Reports = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://127.0.0.1:5000/expenses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setExpenses(data);
      } catch (err) {
        console.error("Error fetching expenses:", err);
      }
    }
    fetchExpenses();
  }, []);

  // ✅ Export CSV
  const exportCSV = () => {
    const header = "Date,Amount,Category\n";
    const rows = expenses.map(e => `${e.date},${e.amount},${e.category}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.csv";
    a.click();
  };

  // ✅ Export Excel (simple CSV with .xls extension)
  const exportExcel = () => {
    const header = "Date\tAmount\tCategory\n";
    const rows = expenses.map(e => `${e.date}\t${e.amount}\t${e.category}`).join("\n");
    const blob = new Blob([header + rows], { type: "application/vnd.ms-excel" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.xls";
    a.click();
  };

  // ✅ Export PDF (basic text)
  const exportPDF = () => {
    const content = expenses.map(e => `${e.date} - ₹${e.amount} - ${e.category}`).join("\n");
    const blob = new Blob([content], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.pdf";
    a.click();
  };

  return (
    <div className="reports-page">
      <h2>Reports</h2>
      <p>Download expense reports in different formats:</p>
      <div className="report-buttons">
        <button onClick={exportCSV}>CSV</button>
        <button onClick={exportPDF}>PDF</button>
        <button onClick={exportExcel}>Excel</button>
      </div>
    </div>
  );
};

export default Reports;
