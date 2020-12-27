import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { BookProvider } from "./context";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BookProvider>
    <Router>
      <App />
    </Router>
  </BookProvider>,
  document.getElementById("root")
);

serviceWorker.register();
