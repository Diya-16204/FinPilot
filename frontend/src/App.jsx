import { Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Landing & Auth
import BlogSlider from "./components/blogSlider";
import Login from "./pages/login";
import Register from "./pages/register";

// Dashboard
import Dashboard from "./pages/dashBoard";

// Dashboard Feature Pages
// import VisualizeExpenses from "./pages/visualizeExpense";

// Visualize Subpages (inside /pages/Visualize/)
import VisualizePie from "./pages/Visualize/pie";
import VisualizeBar from "./pages/Visualize/bar";
import VisualizeTrends from "./pages/Visualize/trend";

// Future pages (optional)
// import ViewExpenses from "./pages/viewExpenses";
// import ModifyExpenses from "./pages/modifyExpenses";
// import ExpensePrediction from "./pages/expensePrediction";
// import ExportReports from "./pages/exportReports";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing */}
        <Route path="/" element={<BlogSlider />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Visualize Expenses Main Page */}
        {/* <Route path="/visualize-expenses" element={<VisualizeExpenses />} /> */}

        {/* Visualize Subpages */}
        <Route path="/visualize-expenses/pie" element={<VisualizePie />} />
        <Route path="/visualize-expenses/bar" element={<VisualizeBar />} />
        <Route path="/visualize-expenses/trends" element={<VisualizeTrends />} />

        {/* Future Feature Routes (uncomment when ready) */}
        {/* <Route path="/view-expenses" element={<ViewExpenses />} />
        <Route path="/modify-expenses" element={<ModifyExpenses />} />
        <Route path="/expense-prediction" element={<ExpensePrediction />} />
        <Route path="/export-reports" element={<ExportReports />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
