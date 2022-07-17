import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/bootstrap.min.css";
import "./css/style.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register(null);
