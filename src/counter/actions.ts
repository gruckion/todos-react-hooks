import * as actions from "./actiontypes";

export type CounterAction = { type: actions.INCREMENT } | { type: actions.DECREMENT };
