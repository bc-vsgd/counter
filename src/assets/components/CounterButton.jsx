const CounterButton = (props) => {
  const { counter, setCounter, label } = props;

  const increment = () => {
    // "-" button
    if (label === "-") {
      setCounter(counter - 1);
      // "+" button
    } else if (label === "+") {
      setCounter(counter + 1);
    }
  };
  return (
    <button className="counter-button" onClick={increment}>
      {label === "-" ? (
        <i class="fa-solid fa-minus"></i>
      ) : (
        <i class="fa-solid fa-plus"></i>
      )}
    </button>
  );
};

export default CounterButton;
