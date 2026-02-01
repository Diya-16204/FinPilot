import "./dashBoard.css";
import { useNavigate } from "react-router-dom";

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
    desc: "Download expense reports in CSV or PDF format.",
    img: exportReportsImg,
    actions: [
      { label: "CSV", route: "/export-reports/csv" },
      { label: "PDF", route: "/export-reports/pdf" },
      { label: "Excel", route: "/export-reports/excel" },
    ],
  },
];

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <section className="dashboard-section">
      <h2 className="dashboard-title">Expense Management Dashboard</h2>

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
    </section>
  );
};

export default DashBoard;
