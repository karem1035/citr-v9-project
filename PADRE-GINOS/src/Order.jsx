import { useState, useEffect } from "react";
import Pizza from "./Pizza";

const intel = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
  }

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              id="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div onChange={(e) => setPizzaSize(e.target.value)}>
            <label htmlFor="pizza-size">Pizza size</label>
            <div>
              <span>
                <input
                  type="radio"
                  name="pizza-size"
                  id="pizza-s"
                  value="S"
                  checked={pizzaSize === "S"}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>

              <span>
                <input
                  type="radio"
                  name="pizza-size"
                  id="pizza-m"
                  value="M"
                  checked={pizzaSize === "M"}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>

              <span>
                <input
                  type="radio"
                  name="pizza-size"
                  id="pizza-l"
                  value="L"
                  checked={pizzaSize === "L"}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
      </form>
      <div className="order-pizza">
        <Pizza
          name="pepperoni"
          description="Tomato sauce, mozzarella, basil"
          image="/public/pizzas/pepperoni.webp"
        />
        <p>13.99$</p>
      </div>
    </div>
  );
}
