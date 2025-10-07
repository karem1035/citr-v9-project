let counter = 0;

const Pizza = (props) => {
  counter = counter + 1;
  return (
    <div className="pizza">
      <h1>
        {props.name} {counter}
      </h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Pizza;
