import { Routes, Route } from "react-router-dom";

import BlogSlider from "./components/blogSlider";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashBoard";

function App() {
  return (
    <Routes>
      {/* Landing / Slider */}
      <Route path="/" element={<BlogSlider />} />

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Guest or After Login */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
