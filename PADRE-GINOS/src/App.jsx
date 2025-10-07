import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Margherita" description="Tomato sauce, mozzarella, basil" />
      <Pizza
        name="Diavola"
        description="Tomato sauce, mozzarella, red pepper"
      />
      <Pizza
        name="Capricciosa"
        description="Tomato sauce, mozzarella, ham, mushrooms"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
