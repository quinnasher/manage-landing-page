import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<div className={"h-full w-full bg-red-600"}></div>*/}
    <App />
  </React.StrictMode>,
);
