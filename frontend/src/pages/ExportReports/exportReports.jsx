import { useEffect, useState } from "react";
import "./exportReports.css";
import * as XLSX from "xlsx";

const ExportReports = () => {
  const [expenses, setExpenses] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

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

  // ✅ Export Recent (latest 10 or all if < 10)
  const exportRecent = () => {
    const sorted = [...expenses].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    const lastTen = sorted.length <= 10 ? sorted : sorted.slice(0, 10);

    const worksheet = XLSX.utils.json_to_sheet(lastTen);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Recent Expenses");
    XLSX.writeFile(workbook, "recent_expenses.xlsx");
  };

  // ✅ Export Custom Range
  const exportCustom = () => {
    if (!fromDate || !toDate) {
      alert("Please select both From and To dates");
      return;
    }
    const from = new Date(fromDate);
    const to = new Date(toDate);

    if (to < from) {
      alert("To date cannot be earlier than From date");
      return;
    }

    const filtered = expenses.filter(e => {
      const d = new Date(e.date);
      return d >= from && d <= to;
    });

    if (!filtered.length) {
      alert("No expenses found in this range");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(filtered);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Custom Expenses");
    XLSX.writeFile(workbook, `expenses_${fromDate}_to_${toDate}.xlsx`);
  };

  return (
    <div className="export-page">
      <h2>Export Reports (Excel)</h2>
      <p>Download your expense reports in Excel format.</p>

      <div className="export-actions">
        {/* ✅ Recent Export Button */}
        <button onClick={exportRecent}>Export Recent Data</button>
      </div>

      {/* ✅ Custom Dates on Next Line */}
      <div className="date-range">
        <input
          type="date"
          value={fromDate}
          onChange={e => setFromDate(e.target.value)}
        />
        <input
          type="date"
          value={toDate}
          onChange={e => setToDate(e.target.value)}
        />
        <button onClick={exportCustom}>Export Custom Dates</button>
      </div>
    </div>
  );
};

export default ExportReports;
