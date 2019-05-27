import React, { Dispatch } from "react";
import { CounterAction } from "./counter/actions";

export interface State {
  counter: number;
}

const initialState: State = {
  counter: 0,
};

interface Context {
  state: State;
  dispatch: Dispatch<CounterAction>;
}

export const CounterContext = React.createContext<Context>({
  state: initialState,
  dispatch: (): number => 0,
});
