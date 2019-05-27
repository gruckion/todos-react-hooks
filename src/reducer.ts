import { State } from "./context";

export type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

export const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
