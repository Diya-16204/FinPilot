import "./exportReports.css";

const ExportExcel = () => {
  return (
    <div className="export-page">
      <h2>Export Excel</h2>
      <p>Download your expense reports in Excel format.</p>
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

export default ExportExcel;
