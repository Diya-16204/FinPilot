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

function App() {
  return (
    <>
      <Navbar />

      {/* 👇 Wrap all page content inside a main wrapper */}
      <main className="page-content">
        <Routes>
          {/* Landing */}
          <Route path="/" element={<BlogSlider />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Visualize Subpages */}
          <Route path="/visualize-expenses/pie" element={<VisualizePie />} />
          <Route path="/visualize-expenses/bar" element={<VisualizeBar />} />
          <Route path="/visualize-expenses/trends" element={<VisualizeTrends />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
