import React, { useContext, useReducer } from "react";
import { TodosContext } from "./context";
import { todosReducer } from "./reducer";
import { TodoList } from "./components/TodoList";

export const App = (): JSX.Element => {
  const initialState = useContext(TodosContext);
  const [state] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={state}>
      <TodoList />
    </TodosContext.Provider>
  );
};
