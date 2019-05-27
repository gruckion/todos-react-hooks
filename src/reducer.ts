import { State } from "./context";
import { CounterAction } from "./counter/actions";
import * as actions from "./counter/actiontypes";

export const counterReducer = (state: State, action: CounterAction): State => {
  switch (action.type) {
    case actions.INCREMENT:
      return { counter: state.counter + 1 };
    case actions.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
