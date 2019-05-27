import React, { useContext } from "react";
import { TodosContext, Todo } from "../context";

export const TodoList = (): JSX.Element => {
  const state = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing To Do";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(
          (t: Todo): JSX.Element => (
            <li className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4" key={t.id}>
              <span className="flex-1 ml-12 cursor-pointer">{t.text}</span>
              <button>
                <img className="h-6" src="https://icon.now.sh/edit/0050c5" alt="Edit Icon" />
              </button>
              <button>
                <img className="h-6" src="https://icon.now.sh/delete/8b0000" alt="Delete Icon" />
              </button>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
