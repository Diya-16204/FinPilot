import "./dashBoard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import viewExpensesImg from "../../assets/Images/DashBoardPage/ViewExpenses.png";
import modifyExpensesImg from "../../assets/Images/DashBoardPage/ManageExpenses.png";
import visualizeExpensesImg from "../../assets/Images/DashBoardPage/VisualizeResults.png";
import expensePredictionImg from "../../assets/Images/DashBoardPage/ExpensePrediction.png";
import exportReportsImg from "../../assets/Images/DashBoardPage/ExportResults.png";

const cards = [
  {
    title: "View Expenses",
    desc: "View all recorded expenses in a structured and categorized format.",
    img: viewExpensesImg,
    actions: [
      { label: "View", route: "/view-expenses" },
      { label: "Filter", route: "/view-expenses/filter" },
      { label: "Search", route: "/view-expenses/search" },
    ],
  },
  {
    title: "Modify Expenses",
    desc: "Add, delete or update expense records to keep data accurate.",
    img: modifyExpensesImg,
    actions: [
      { label: "Add", route: "/modify-expenses/add" },
      { label: "Delete", route: "/modify-expenses/delete" },
      { label: "Update", route: "/modify-expenses/update" },
    ],
  },
  {
    title: "Visualize Expenses",
    desc: "Analyze spending patterns using charts and graphs.",
    img: visualizeExpensesImg,
    actions: [
      { label: "Pie", route: "/visualize-expenses/pie" },
      { label: "Bar", route: "/visualize-expenses/bar" },
      { label: "Trends", route: "/visualize-expenses/trends" },
    ],
  },
  {
    title: "Expense Prediction",
    desc: "Predict future expenses using historical spending data.",
    img: expensePredictionImg,
    actions: [
      { label: "Forecast", route: "/expense-prediction/forecast" },
      { label: "Monthly", route: "/expense-prediction/monthly" },
      { label: "Yearly", route: "/expense-prediction/yearly" },
    ],
  },
  {
    title: "Export Reports",
    desc: "Download expense reports in CSV, Excel, or PDF format.",
    img: exportReportsImg,
    actions: [
      { label: "Go to Export Reports", route: "/export-reports" } // ✅ single combined page
    ],
  },
];

const DashBoard = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch old expenses from backend
  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return; // Guest mode → skip DB fetch
      }

      try {
        const res = await fetch("http://127.0.0.1:5000/expenses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setExpenses(data);
        } else {
          alert(data.error || "Failed to load expenses");
        }
      } catch (err) {
        console.error(err);
        alert("Error fetching expenses");
      } finally {
        setLoading(false);
      }
    }

    fetchExpenses();
  }, []);

  return (
    <section className="dashboard-section">
      <h2 className="dashboard-title">Expense Management Dashboard</h2>

      {/* ✅ Cards */}
      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <div className="dashboard-card" key={index}>
            <div className="dashboard-card-image">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="dashboard-card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="dashboard-card-actions">
                {card.actions.map((action, i) => (
                  <button key={i} onClick={() => navigate(action.route)}>
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Show old expenses */}
      {/* <div className="dashboard-expenses">
        <h3>Your Saved Expenses</h3>
        {loading ? (
          <p>Loading...</p>
        ) : expenses.length > 0 ? (
          <ul>
            {expenses.map((exp, idx) => (
              <li key={idx}>
                {exp.date} — {exp.category} — ₹{exp.amount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No expenses found. Add some!</p>
        )}
      </div> */}
    </section>
  );
};

export default DashBoard;
