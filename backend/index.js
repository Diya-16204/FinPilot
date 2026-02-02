const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const expenseRoutes = require("./routes/expenses");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/finpilot")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ✅ Routes
app.use("/auth", authRoutes);        // Register/Login
app.use("/expenses", expenseRoutes); // Expense CRUD

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("FinPilot Backend is running 🚀");
});

// ✅ Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error("Unexpected Error:", err);
  res.status(500).json({ error: "Something went wrong on the server" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));
