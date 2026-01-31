import "./exportReports.css";

const ExportPDF = () => {
  return (
    <div className="export-page">
      <h2>Export PDF</h2>
      <p>Download your expense reports in PDF format.</p>
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

export default ExportPDF;
