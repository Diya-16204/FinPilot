import "./dashBoard.css";

const cards = [
  {
    title: "View Expenses",
    desc: "View all recorded expenses in a structured and categorized format.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    actions: ["View", "Filter", "Search"],
  },
  {
    title: "Modify Expenses",
    desc: "Edit or delete existing expense records to keep data accurate.",
    img: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd",
    actions: ["Edit", "Delete", "Update"],
  },
  {
    title: "Visualize Expenses",
    desc: "Analyze spending patterns using charts and graphs.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    actions: ["Pie", "Bar", "Trends"],
  },
  {
    title: "Expense Prediction",
    desc: "Predict future expenses using historical spending data.",
    img: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa",
    actions: ["Forecast", "Monthly", "Yearly"],
  },
  {
    title: "Export Reports",
    desc: "Download expense reports in CSV or PDF format.",
    img: "https://images.unsplash.com/photo-1581092919535-7f5c1b84b1d4",
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
