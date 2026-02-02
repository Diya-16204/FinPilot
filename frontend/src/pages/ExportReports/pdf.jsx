import "./exportReports.css";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useEffect, useState } from "react";
import { filterExpenses } from "../../utils/filterUtils.js";

const ExportPDF = () => {
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
    if (!filtered.length) {
      alert("No expense data found!");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Expense Report", 14, 20);

    const tableData = filtered.map(t => [t.date, t.amount, t.category]);

    autoTable(doc, {
      head: [["Date", "Amount", "Category"]],
      body: tableData,
      startY: 30,
    });

    doc.save(`transactions_${range}.pdf`);
  };

  return (
    <div className="export-page">
      <h2>Export PDF</h2>
      <p>Download your expense reports in PDF format.</p>
      <div className="export-actions">
        <button onClick={() => handleExport("recent")}>Export Recent</button>
        <button onClick={() => handleExport("week")}>Export Last Week</button>
        <button onClick={() => handleExport("month")}>Export Last Month</button>
        <button onClick={() => handleExport("year")}>Export Last Year</button>
      </div>
    </div>
  );
};

export default ExportPDF;
