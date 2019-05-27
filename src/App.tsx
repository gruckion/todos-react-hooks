import React, { useContext, useReducer } from "react";
import { CounterContext } from "./context";
import { counterReducer } from "./reducer";
import { Counter } from "./components/Counter";

export const App = (): JSX.Element => {
  const context = useContext(CounterContext);
  const [state, dispatch] = useReducer(counterReducer, context.state);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Counter />
    </CounterContext.Provider>
  );
};
