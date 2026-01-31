import "./dashBoard.css";

import viewExpensesImg from "../assets/Images/DashBoardPage/ViewExpenses.png";
import modifyExpensesImg from "../assets/Images/DashBoardPage/ManageExpenses.png";
import visualizeExpensesImg from "../assets/Images/DashBoardPage/VisualizeResults.png";
import expensePredictionImg from "../assets/Images/DashBoardPage/ExpensePrediction.png";
import exportReportsImg from "../assets/Images/DashBoardPage/ExportResults.png";

const cards = [
  {
    title: "View Expenses",
    desc: "View all recorded expenses in a structured and categorized format.",
    img: viewExpensesImg,
    actions: ["View", "Filter", "Search"],
  },
  {
    title: "Modify Expenses",
    desc: "Edit or delete existing expense records to keep data accurate.",
    img: modifyExpensesImg,
    actions: ["Edit", "Delete", "Update"],
  },
  {
    title: "Visualize Expenses",
    desc: "Analyze spending patterns using charts and graphs.",
    img: visualizeExpensesImg,
    actions: ["Pie", "Bar", "Trends"],
  },
  {
    title: "Expense Prediction",
    desc: "Predict future expenses using historical spending data.",
    img: expensePredictionImg,
    actions: ["Forecast", "Monthly", "Yearly"],
  },
  {
    title: "Export Reports",
    desc: "Download expense reports in CSV or PDF format.",
    img: exportReportsImg,
    actions: ["CSV", "PDF", "Excel"],
  },
];

const DashBoard = () => {
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
                {card.actions.map((a, i) => (
                  <button key={i}>{a}</button>
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