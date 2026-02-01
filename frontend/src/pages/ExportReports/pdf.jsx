import "./exportReports.css";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const ExportPDF = () => {
  const handleExport = async (range) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/expenses");
      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        alert("No expense data found!");
        return;
      }

      let filtered = data;
      if (range === "recent") {
        filtered = data.slice(-10);
      }

      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("Expense Report", 14, 20);

      const tableData = filtered.map(t => [
        t.date || "",
        t.amount?.toString() || "",
        t.category || ""
      ]);

      autoTable(doc, {
        head: [["Date", "Amount", "Category"]],
        body: tableData,
        startY: 30,
      });

      doc.save(`transactions_${range}.pdf`);
    } catch (err) {
      console.error("Error exporting PDF:", err);
      alert("Failed to export PDF. Check console for details.");
    }
  };

  return (
    <div className="export-page">
      <h2>Export PDF</h2>
      <p>Download your expense reports in PDF format.</p>
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

export default ExportPDF;
