import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ReactGA from "react-ga4";
import "./style.css";

ReactGA.initialize(`${import.meta.env.MEASUREMENT_ID}`);
ReactGA.send("pageview");
ReactGA.event({
  category: "Form",
  action: "Submit",
  label: "Contact Form",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
