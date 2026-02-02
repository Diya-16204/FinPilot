import { useEffect, useState } from "react";
import "./exportReports.css";
import { downloadFile } from "../../utils/exportUtils.js";
import { filterExpenses } from "../../utils/filterUtils.js";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const ExportReports = () => {
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
  const exportCSV = (range) => {
    const filtered = filterExpenses(expenses, range);
    const header = "Date,Category,Amount\n";
    const rows = filtered.map(t => `${t.date},${t.category},${t.amount}`).join("\n");
    downloadFile(header + rows, `transactions_${range}.csv`, "text/csv");
  };

  // ✅ Export Excel
  const exportExcel = (range) => {
    const filtered = filterExpenses(expenses, range);
    const worksheet = XLSX.utils.json_to_sheet(filtered);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");
    XLSX.writeFile(workbook, `transactions_${range}.xlsx`);
  };

  // ✅ Export PDF
  const exportPDF = (range) => {
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
      <h2>Export Reports</h2>
      <p>Download your expense reports in CSV, Excel, or PDF format.</p>
      <div className="export-actions">
        <button onClick={() => exportCSV("recent")}>CSV (Recent)</button>
        <button onClick={() => exportExcel("recent")}>Excel (Recent)</button>
        <button onClick={() => exportPDF("recent")}>PDF (Recent)</button>

        <button onClick={() => exportCSV("month")}>CSV (Last Month)</button>
        <button onClick={() => exportExcel("month")}>Excel (Last Month)</button>
        <button onClick={() => exportPDF("month")}>PDF (Last Month)</button>

        <button onClick={() => exportCSV("year")}>CSV (Last Year)</button>
        <button onClick={() => exportExcel("year")}>Excel (Last Year)</button>
        <button onClick={() => exportPDF("year")}>PDF (Last Year)</button>
      </div>
    </div>
  );
};

export default ExportReports;
