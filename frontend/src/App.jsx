import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Header_Footer_Top/footer";
import BlogSlider from "./components/BlogSlider/blogSlider";
import ScrollToTop from "./components/ScrollToTop";

// Auth Pages
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";

// Dashboard Page
import Dashboard from "./pages/Dashboard/dashboard";

// Other Pages...
import VisualizePie from "./pages/Visualize/pie";
import VisualizeBar from "./pages/Visualize/bar";
import VisualizeTrends from "./pages/Visualize/trend";
import ExportCSV from "./pages/ExportReports/csv";
import ExportPDF from "./pages/ExportReports/pdf";
import ExportExcel from "./pages/ExportReports/excel";
import ExpenseForecast from "./pages/ExpensePrediction/forecast";
import ExpenseMonthly from "./pages/ExpensePrediction/monthly";
import ExpenseYearly from "./pages/ExpensePrediction/yearly";
import ViewAll from "./pages/ViewExpenses/viewAll";
import FilterView from "./pages/ViewExpenses/filterView";
import SearchView from "./pages/ViewExpenses/searchView";
import AddExpense from "./pages/ModifyExpenses/addExpense";
import DeleteExpense from "./pages/ModifyExpenses/deleteExpense";
import UpdateExpense from "./pages/ModifyExpenses/updateExpense";
import Contact from "./pages/Contacts/contacts";

function App() {
  const [authType, setAuthType] = useState(null); // "login" or "register"
  const navigate = useNavigate();

  function handleAuth(type) {
    setAuthType(type);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 👇 Guest Mode handler
  function handleGuest() {
    navigate("/dashboard");
  }

  return (
    <>
      {/* Navbar with handlers */}
      <Navbar 
        onLogin={() => handleAuth("login")} 
        onRegister={() => handleAuth("register")} 
        onGuest={handleGuest} 
      />

      <main className="page-content">
        <ScrollToTop />

        {/* Always show BlogSlider on home */}
        <Routes>
          <Route path="/" element={<BlogSlider />} />

          {/* Dashboard (separate page) */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Auth Routes (separate pages if needed) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Other Pages */}
          <Route path="/visualize-expenses/pie" element={<VisualizePie />} />
          <Route path="/visualize-expenses/bar" element={<VisualizeBar />} />
          <Route path="/visualize-expenses/trends" element={<VisualizeTrends />} />
          <Route path="/export-reports/csv" element={<ExportCSV />} />
          <Route path="/export-reports/pdf" element={<ExportPDF />} />
          <Route path="/export-reports/excel" element={<ExportExcel />} />
          <Route path="/reports" element={<ExportCSV />} />
          <Route path="/expense-prediction/forecast" element={<ExpenseForecast />} />
          <Route path="/expense-prediction/monthly" element={<ExpenseMonthly />} />
          <Route path="/expense-prediction/yearly" element={<ExpenseYearly />} />
          <Route path="/view-expenses" element={<ViewAll />} />
          <Route path="/view-expenses/filter" element={<FilterView />} />
          <Route path="/view-expenses/search" element={<SearchView />} />
          <Route path="/modify-expenses/add" element={<AddExpense />} />
          <Route path="/modify-expenses/delete" element={<DeleteExpense />} />
          <Route path="/modify-expenses/update" element={<UpdateExpense />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Inline Auth Section (footer ke upar) */}
        {authType && (
          <div className="auth-section">
            {authType === "login" && <Login />}
            {authType === "register" && <Register />}
            <button onClick={() => setAuthType(null)}>Close</button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
