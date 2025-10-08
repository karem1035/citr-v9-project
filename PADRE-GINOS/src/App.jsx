import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order.jsx";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Padre Gino's Order now</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
