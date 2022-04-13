import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("No root element found");
}
const root = createRoot(container);
root.render(<App />);
