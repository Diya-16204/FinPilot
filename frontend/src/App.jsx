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

// Expense Prediction Subpages
import ExpenseForecast from "./pages/ExpensePrediction/forecast";
import ExpenseMonthly from "./pages/ExpensePrediction/monthly";
import ExpenseYearly from "./pages/ExpensePrediction/yearly";

// Expense Management Subpages
import ViewAll from "./pages/ViewExpenses/viewAll";
import FilterView from "./pages/ViewExpenses/filterView";
import SearchView from "./pages/ViewExpenses/searchView";

import AddExpense from "./pages/ModifyExpenses/addExpense";
import DeleteExpense from "./pages/ModifyExpenses/deleteExpense";
import UpdateExpense from "./pages/ModifyExpenses/updateExpense";

// // Reports Page (wrapper)
// import Reports from "./pages/Reports/reports";

// Contact Page
import Contact from "./pages/Contacts/contacts";

// ScrollToTop Component
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        {/* ensures page always starts at top on route change */}
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
          <Route path="/reports" element={<ExportCSV />} />   {/* 👈 wrapper route */}

          {/* Expense Prediction */}
          <Route path="/expense-prediction/forecast" element={<ExpenseForecast />} />
          <Route path="/expense-prediction/monthly" element={<ExpenseMonthly />} />
          <Route path="/expense-prediction/yearly" element={<ExpenseYearly />} />

          {/* Expense Management */}
          <Route path="/view-expenses" element={<ViewAll />} />
          <Route path="/view-expenses/filter" element={<FilterView />} />
          <Route path="/view-expenses/search" element={<SearchView />} />

          <Route path="/modify-expenses/add" element={<AddExpense />} />
          <Route path="/modify-expenses/delete" element={<DeleteExpense />} />
          <Route path="/modify-expenses/update" element={<UpdateExpense />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
