const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: String,
  amount: Number,
  category: String,
});

module.exports = mongoose.model("Expense", expenseSchema);
