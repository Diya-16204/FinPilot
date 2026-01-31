import "./exportReports.css";

const ExportCSV = () => {
  return (
    <div className="export-page">
      <h2>Export CSV</h2>
      <p>Download your expense reports in CSV format.</p>
      <div className="export-actions">
        <button>Export Recent Transactions</button>
        <button>Export Last 1 Week</button>
        <button>Export Last 1 Month</button>
        <button>Export Last 1 Year</button>
        <button>Export by Custom Date</button>
      </div>
    </div>
  );
};

export default ExportCSV;
