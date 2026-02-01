import { useState } from "react";
import "./modifyExpense.css";

import AddExpense from "./addExpense";
import DeleteExpense from "./deleteExpense";
import UpdateExpense from "./updateExpense";

const ModifyExpense = () => {
  const [active, setActive] = useState("add");

  return (
    <div className="modify-page">
      <h2>Manage Expenses</h2>
      <p>Add, delete or update expense records.</p>

      <div className="button-group">
        <button onClick={() => setActive("add")}>Add</button>   {/* 👈 Edit → Add */}
        <button onClick={() => setActive("delete")}>Delete</button>
        <button onClick={() => setActive("update")}>Update</button>
      </div>


      <div className="modify-content">
        {active === "add" && <AddExpense />}
        {active === "delete" && <DeleteExpense />}
        {active === "update" && <UpdateExpense />}
      </div>
    </div>
  );
};

export default ModifyExpense;
