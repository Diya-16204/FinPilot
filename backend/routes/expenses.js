const express = require("express");
const jwt = require("jsonwebtoken");
const Expense = require("../models/Expense");

const router = express.Router();

// Middleware to check token
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// ✅ Get all expenses for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.userId });
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching expenses" });
  }
});

// ✅ Add expense
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const expense = new Expense({ ...req.body, userId: req.userId });
    await expense.save();
    res.json({ message: "Expense added successfully!", expense });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding expense" });
  }
});

// ✅ Update expense by date
router.post("/update", authMiddleware, async (req, res) => {
  const { date, amount, category } = req.body;
  if (!date) return res.status(400).json({ error: "Date required" });

  try {
    const updated = await Expense.findOneAndUpdate(
      { userId: req.userId, date },
      { amount, category },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json({ message: "Expense updated successfully!", updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating expense" });
  }
});

// ✅ Delete expense by date
router.post("/delete", authMiddleware, async (req, res) => {
  const { date } = req.body;
  if (!date) return res.status(400).json({ error: "Date required" });

  try {
    const deleted = await Expense.findOneAndDelete({ userId: req.userId, date });
    if (!deleted) {
      return res.status(404).json({ error: "Expense not found" });
    }
    res.json({ message: "Expense deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting expense" });
  }
});

module.exports = router;
