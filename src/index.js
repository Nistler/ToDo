import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDo from "./ToDo.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>,
  document.getElementById("tasksContent")
);
