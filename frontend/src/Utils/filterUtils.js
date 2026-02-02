// src/utils/filterUtils.js
export function filterExpenses(expenses, range) {
  const now = new Date(); // ✅ current date/time

  if (range === "recent") {
    // ✅ Last 5 transactions (irrespective of date, just last entries)
    return expenses.slice(-5);
  }

  if (range === "week") {
    // ✅ Last 7 days from today
    const weekAgo = new Date(now);
    weekAgo.setDate(now.getDate() - 7);
    return expenses.filter(e => new Date(e.date) >= weekAgo && new Date(e.date) <= now);
  }

  if (range === "month") {
    // ✅ Last 30 days from today
    const monthAgo = new Date(now);
    monthAgo.setDate(now.getDate() - 30);
    return expenses.filter(e => new Date(e.date) >= monthAgo && new Date(e.date) <= now);
  }

  if (range === "year") {
    // ✅ Last 365 days from today
    const yearAgo = new Date(now);
    yearAgo.setDate(now.getDate() - 365);
    return expenses.filter(e => new Date(e.date) >= yearAgo && new Date(e.date) <= now);
  }

  return expenses; // fallback
}
