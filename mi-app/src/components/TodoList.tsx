import TodoItem from './TodoItem';
import { useTodos } from '../todo/hooks/useTodos';

const TodoList = () => {

    /* const { todoState } = useContext( TodoContext );
    const { todos } = todoState; */

    const { todos } = useTodos();

  return (
    <ul>
        { todos.map( todo => <TodoItem key={ todo.id } todo={ todo } /> ) }
    </ul>
  )
}

export default TodoList