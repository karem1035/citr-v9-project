const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  debugger;
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pizza Margherita",
      description:
        "Tomato, mozzarella, fresh basil, salt, and extra-virgin olive oil.",
    }),
    React.createElement(Pizza, {
      name: "Pizza Marinara",
      description: "Tomato, garlic, oregano, and extra-virgin olive oil.",
    }),
    React.createElement(Pizza, {
      name: "Pizza Quattro Stagioni",
      description:
        "Tomato, mozzarella, mushrooms, artichokes, ham, olives, and oregano.",
    })
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
