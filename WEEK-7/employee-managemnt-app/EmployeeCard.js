import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>

      <button className={theme === "light" ? "light-btn" : "dark-btn"}>
        View Details
      </button>
    </div>
  );
}

export default EmployeeCard;
