import React, { Dispatch } from "react";
import { Action } from "./reducer";

export interface State {
  counter: number;
}

const initialState: State = {
  counter: 0,
};

interface Context {
  state: State;
  dispatch: Dispatch<Action>;
}

export const CounterContext = React.createContext<Context>({ state: initialState, dispatch: (): number => 0 });
