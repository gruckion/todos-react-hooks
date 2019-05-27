import React, { useContext } from "react";
import { CounterContext } from "../../context";

export const Counter = (): JSX.Element => {
  const { state, dispatch } = useContext(CounterContext);

  const increment = (): void => dispatch({ type: "INCREMENT" });
  const decrement = (): void => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <span>The counter is: {state.counter}</span>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
