import { useState } from "react";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";

const Main = () => {
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <div className="counter-div">
        <div>
          {counter > 0 && (
            <CounterButton
              counter={counter}
              setCounter={setCounter}
              label="-"
            />
          )}
          <p className="counter-p">{counter}</p>
          {counter < 10 && (
            <CounterButton
              counter={counter}
              setCounter={setCounter}
              label="+"
            />
          )}
        </div>
        <div>
          <ResetButton setCounter={setCounter} />
        </div>
      </div>
    </main>
  );
};

export default Main;
