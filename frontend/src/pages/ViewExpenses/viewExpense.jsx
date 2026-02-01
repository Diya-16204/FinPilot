import ViewAll from "./viewAll";
import FilterView from "./filterView";
import SearchView from "./searchView";

const ViewExpenses = () => {
  const [active, setActive] = useState("view");

  return (
    <div className="expenses-page">
      <h2>View Expenses</h2>
      <div className="button-group">
        <button onClick={() => setActive("view")}>View</button>
        <button onClick={() => setActive("filter")}>Filter</button>
        <button onClick={() => setActive("search")}>Search</button>
      </div>

      {active === "view" && <ViewAll />}
      {active === "filter" && <FilterView />}
      {active === "search" && <SearchView />}
    </div>
  );
};
