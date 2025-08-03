import React, { useState } from "react";
import EmployeesList from "./EmployeesList";
import ThemeContext from "./ThemeContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>Employee Management App</h1>

        {/* Toggle theme */}
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
