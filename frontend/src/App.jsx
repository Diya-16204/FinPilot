// import { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";

// // Global Components
// import Navbar from "./components/Navbar/navbar";
// import Footer from "./components/Header_Footer_Top/footer";
// import BlogSlider from "./components/BlogSlider/blogSlider";
// import ScrollToTop from "./components/ScrollToTop";

// // Auth Pages
// import Login from "./pages/Auth/login";
// import Register from "./pages/Auth/register";

// // Dashboard Page
// import Dashboard from "./pages/DashBoard/dashBoard";

// // Other Pages...
// import VisualizePie from "./pages/Visualize/pie";
// import VisualizeBar from "./pages/Visualize/bar";
// import VisualizeTrends from "./pages/Visualize/trend";
// import ExportReports from "./pages/ExportReports/exportReports";   // ✅ overall combined export
// import ExportCSV from "./pages/ExportReports/csv";                 // ✅ dedicated CSV page
// import ExportExcel from "./pages/ExportReports/excel";             // ✅ dedicated Excel page
// import ExportPDF from "./pages/ExportReports/pdf";                 // ✅ dedicated PDF page
// import ExpenseForecast from "./pages/ExpensePrediction/forecast";
// import ExpenseMonthly from "./pages/ExpensePrediction/monthly";
// import ExpenseYearly from "./pages/ExpensePrediction/yearly";
// import ViewAll from "./pages/ViewExpenses/viewAll";
// import FilterView from "./pages/ViewExpenses/filterView";
// import SearchView from "./pages/ViewExpenses/searchView";
// import AddExpense from "./pages/ModifyExpenses/addExpense";
// import DeleteExpense from "./pages/ModifyExpenses/deleteExpense";
// import UpdateExpense from "./pages/ModifyExpenses/updateExpense";
// import Contact from "./pages/Contacts/contacts";

// function App() {
//   const [authType, setAuthType] = useState(null); // "login" or "register"
//   const navigate = useNavigate();

//   function handleAuth(type) {
//     setAuthType(type);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   // 👇 Guest Mode handler
//   function handleGuest() {
//     navigate("/dashboard");
//   }

//   return (
//     <>
//       {/* Navbar with handlers */}
//       <Navbar 
//         onLogin={() => handleAuth("login")} 
//         onRegister={() => handleAuth("register")} 
//         onGuest={handleGuest} 
//       />

//       <main className="page-content">
//         <ScrollToTop />

//         {/* Routes */}
//         <Routes>
//           {/* Home */}
//           <Route path="/" element={<BlogSlider />} />

//           {/* Dashboard */}
//           <Route path="/dashboard" element={<Dashboard />} />

//           {/* Auth */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Visualization */}
//           <Route path="/visualize-expenses/pie" element={<VisualizePie />} />
//           <Route path="/visualize-expenses/bar" element={<VisualizeBar />} />
//           <Route path="/visualize-expenses/trends" element={<VisualizeTrends />} />

//           {/* ✅ Export Reports */}
//           <Route path="/export-reports" element={<ExportReports />} />   {/* Overall page */}
//           <Route path="/export-reports/csv" element={<ExportCSV />} />   {/* CSV only */}
//           <Route path="/export-reports/excel" element={<ExportExcel />} /> {/* Excel only */}
//           <Route path="/export-reports/pdf" element={<ExportPDF />} />   {/* PDF only */}

//           {/* Expense Prediction */}
//           <Route path="/expense-prediction/forecast" element={<ExpenseForecast />} />
//           <Route path="/expense-prediction/monthly" element={<ExpenseMonthly />} />
//           <Route path="/expense-prediction/yearly" element={<ExpenseYearly />} />

//           {/* View Expenses */}
//           <Route path="/view-expenses" element={<ViewAll />} />
//           <Route path="/view-expenses/filter" element={<FilterView />} />
//           <Route path="/view-expenses/search" element={<SearchView />} />

//           {/* Modify Expenses */}
//           <Route path="/modify-expenses/add" element={<AddExpense />} />
//           <Route path="/modify-expenses/delete" element={<DeleteExpense />} />
//           <Route path="/modify-expenses/update" element={<UpdateExpense />} />

//           {/* Contact */}
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         {/* Inline Auth Section */}
//         {authType && (
//           <div className="auth-section">
//             {authType === "login" && <Login />}
//             {authType === "register" && <Register />}
//             <button onClick={() => setAuthType(null)}>Close</button>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;






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
import ExportReports from "./pages/ExportReports/exportReports";
import ExportCSV from "./pages/ExportReports/csv";
import ExportExcel from "./pages/ExportReports/excel";
import ExportPDF from "./pages/ExportReports/pdf";
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

// ✅ Auth Guard
import ProtectedRoute from "./pages/Auth/protectedRoute";

function App() {
  const [authType, setAuthType] = useState(null); 
  const navigate = useNavigate();

  function handleAuth(type) {
    setAuthType(type);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ✅ Guest Mode handler
  function handleGuest() {
    localStorage.setItem("guest", "true"); 
    navigate("/dashboard"); 
  }

  return (
    <>
      <Navbar 
        onLogin={() => handleAuth("login")} 
        onRegister={() => handleAuth("register")} 
        onGuest={handleGuest} 
      />

      <main className="page-content">
        <ScrollToTop />

        <Routes>
          {/* Public */}
          <Route path="/" element={<BlogSlider />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />

          {/* Protected */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/visualize-expenses/pie" element={<ProtectedRoute><VisualizePie /></ProtectedRoute>} />
          <Route path="/visualize-expenses/bar" element={<ProtectedRoute><VisualizeBar /></ProtectedRoute>} />
          <Route path="/visualize-expenses/trends" element={<ProtectedRoute><VisualizeTrends /></ProtectedRoute>} />

          <Route path="/export-reports" element={<ProtectedRoute><ExportReports /></ProtectedRoute>} />
          <Route path="/export-reports/csv" element={<ProtectedRoute><ExportCSV /></ProtectedRoute>} />
          <Route path="/export-reports/excel" element={<ProtectedRoute><ExportExcel /></ProtectedRoute>} />
          <Route path="/export-reports/pdf" element={<ProtectedRoute><ExportPDF /></ProtectedRoute>} />

          <Route path="/expense-prediction/forecast" element={<ProtectedRoute><ExpenseForecast /></ProtectedRoute>} />
          <Route path="/expense-prediction/monthly" element={<ProtectedRoute><ExpenseMonthly /></ProtectedRoute>} />
          <Route path="/expense-prediction/yearly" element={<ProtectedRoute><ExpenseYearly /></ProtectedRoute>} />

          <Route path="/view-expenses" element={<ProtectedRoute><ViewAll /></ProtectedRoute>} />
          <Route path="/view-expenses/filter" element={<ProtectedRoute><FilterView /></ProtectedRoute>} />
          <Route path="/view-expenses/search" element={<ProtectedRoute><SearchView /></ProtectedRoute>} />

          <Route path="/modify-expenses/add" element={<ProtectedRoute><AddExpense /></ProtectedRoute>} />
          <Route path="/modify-expenses/delete" element={<ProtectedRoute><DeleteExpense /></ProtectedRoute>} />
          <Route path="/modify-expenses/update" element={<ProtectedRoute><UpdateExpense /></ProtectedRoute>} />
        </Routes>

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
