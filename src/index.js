import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoBox from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <TodoBox />
  </React.StrictMode>,
  document.getElementById("tasksContent")
);

serviceWorker.unregister();
