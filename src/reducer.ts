import { State, Todo } from "./context";

interface Action {
  type: "TOGGLE_TODO";
  payload: Todo;
}

// React.Reducer<State, React.Dispatch<{}>>
export const todosReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(
          (t: Todo): Todo =>
            t.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete } : t,
        ),
      };
    default:
      return state;
  }
};
