import Pizza from "./Pizza";

export default function Order() {
  const pizzaType = "pepperoni";
  const pizzaSize = "M";

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" id="pizza-type" value={pizzaType}>
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
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
                  id="pizza-s"
                  value="M"
                  checked={pizzaSize === "M"}
                />
                <label htmlFor="pizza-s">Medium</label>
              </span>

              <span>
                <input
                  type="radio"
                  name="pizza-size"
                  id="pizza-s"
                  value="L"
                  checked={pizzaSize === "L"}
                />
                <label htmlFor="pizza-s">Large</label>
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
