import { Todo } from "../todo/interfaces/interfaces"
import { useTodos } from "../todo/hooks/useTodos";

interface Props {
    todo: Todo
}

const TodoItem = ({ todo }: Props ) => {
 
    /* const { toggleTodo } = useContext(TodoContext); */
    const { toggleTodo } = useTodos();
  
    const handleDbClick = () => {
      toggleTodo( todo.id );
    }

  return (
    <li
      style={{ 
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none'
      }} 
      onDoubleClick={ handleDbClick } 
    >
        { todo.description }
    </li>
  )
}

export default TodoItem