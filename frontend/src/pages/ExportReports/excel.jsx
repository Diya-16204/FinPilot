import "./exportReports.css";
import * as XLSX from "xlsx";

const ExportExcel = () => {
  const handleExport = (range) => {
    const transactions = [
      { date: "2026-01-01", item: "Groceries", amount: 1200 },
      { date: "2026-01-02", item: "Fuel", amount: 1500 },
    ];

    let filtered = transactions;
    if (range === "recent") {
      filtered = transactions.slice(-10);
    }

    // 👇 Convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(filtered);

    // 👇 Create workbook and append worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    // 👇 Export to Excel file
    XLSX.writeFile(workbook, `transactions_${range}.xlsx`);

    console.log("Excel Export triggered:", range); // 👈 Debug check
  };

  return (
    <div className="export-page">
      <h2>Export Excel</h2>
      <p>Download your expense reports in Excel format.</p>
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

export default ExportExcel;
