import { Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Header_Footer_Top/footer";

// Landing Component
import BlogSlider from "./components/BlogSlider/blogSlider";

// Auth Pages
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";

// Dashboard Page
import Dashboard from "./pages/Dashboard/dashboard";

// Visualize Subpages
import VisualizePie from "./pages/Visualize/pie";
import VisualizeBar from "./pages/Visualize/bar";
import VisualizeTrends from "./pages/Visualize/trend";

// Export Reports Subpages
import ExportCSV from "./pages/ExportReports/csv";
import ExportPDF from "./pages/ExportReports/pdf";
import ExportExcel from "./pages/ExportReports/excel";

// 👇 ScrollToTop Component
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        {/* 👇 ensures page always starts at top on route change */}
        <ScrollToTop />

        <Routes>
          {/* Landing */}
          <Route path="/" element={<BlogSlider />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Visualize Expenses */}
          <Route path="/visualize-expenses/pie" element={<VisualizePie />} />
          <Route path="/visualize-expenses/bar" element={<VisualizeBar />} />
          <Route path="/visualize-expenses/trends" element={<VisualizeTrends />} />

          {/* Export Reports */}
          <Route path="/export-reports/csv" element={<ExportCSV />} />
          <Route path="/export-reports/pdf" element={<ExportPDF />} />
          <Route path="/export-reports/excel" element={<ExportExcel />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
