import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar";   // ✅ import navbar
import Footer from "./components/footer";   // ✅ import footer

// Pages
import BlogSlider from "./components/blogSlider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashBoard";

function App() {
  return (
    <>
      {/* ✅ Navbar always visible at top */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        {/* Landing / Slider */}
        <Route path="/" element={<BlogSlider />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Guest or After Login */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* ✅ Footer always visible at bottom */}
      <Footer />
    </>
  );
}

export default App;
