import { TodoContext } from "./TodoContext"
import { TodoState } from "../interfaces/interfaces"
import { useReducer } from 'react';
import { TodoReducer } from "./TodoReducer";

const initialState: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      description: 'Get the triforce pieces',
      completed: false
    },
    {
      id: '2',
      description: 'Defeat Ganon',
      completed: false
    },
  ],
  completed: 0,
  pending: 2
}

interface TodoProviderProps {
    children: JSX.Element | JSX.Element[]
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  
  const [todoState, dispatch] = useReducer(TodoReducer, initialState);

  const toggleTodo = ( id: string ) => {
    dispatch({ type: 'toggleTodo', payload: { id } })
  };

  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo
    }}>
        { children }
    </TodoContext.Provider>
  )
}

export default TodoProvider