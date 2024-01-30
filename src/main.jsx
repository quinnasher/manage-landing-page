import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import emailValidator from "./emailValidator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className={"w-340 md:w-1100 mx-auto mt-8"}>
      <Header />
    </div>
    <div className={"w-375  mx-auto md:w-screen"}>
      <div>
        <Footer />
      </div>
    </div>
  </React.StrictMode>,
);
