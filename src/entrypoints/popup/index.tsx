import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";
import { App } from "./app";

import "~/assets/tailwind.css";
import "~/styles/shared.scss";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
