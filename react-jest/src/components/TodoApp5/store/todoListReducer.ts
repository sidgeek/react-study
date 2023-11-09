export type ITodo = string;

type Action =
  | {
      type: "setTodoList";
      payload: ITodo[];
    }
  | {
      type: "addTodo";
      payload: ITodo;
    };

const initState: string[] = [];

export const todoListReducer = (
  state: ITodo[] = initState,
  action: Action
): ITodo[] => {
  switch (action.type) {
    case "setTodoList": {
      return action.payload;
    }

    case "addTodo": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
