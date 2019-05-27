import React from "react";

export interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

export interface State {
  todos: Todo[];
}

export const TodosContext = React.createContext<State>({
  todos: [
    { id: 1, text: "Eat breakfast", complete: false },
    { id: 2, text: "Do laundry", complete: false },
    { id: 3, text: "Finish project", complete: true },
  ],
});
