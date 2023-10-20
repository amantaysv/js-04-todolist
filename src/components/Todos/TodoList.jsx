/* eslint-disable react/prop-types */
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, setTodos, searchTodo, sortButton }) => {
  return (
    <ul className='flex flex-col mb-4'>
      {todos
        .filter((todo) => todo.todoName.includes(searchTodo))
        .filter((todo) => {
          if (sortButton === 'active') {
            return !todo.isCompleted
          }
          if (sortButton === 'favorite') {
            return todo.isFavorite
          }
          return todo
        })
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            searchTodo={searchTodo}
            {...todo}
          />
        ))}
    </ul>
  )
}
