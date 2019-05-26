import React, { useContext, useReducer } from "react";
import { UserContext } from ".";

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

function reducer(state: State, action: any): any {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const App: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const username = useContext(UserContext);

  return (
    <div>
      Hello {username}
      Count: {state.count}
      <button className="border p-1 m-1" type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button className="border p-1 m-1" type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
};

export default App;
