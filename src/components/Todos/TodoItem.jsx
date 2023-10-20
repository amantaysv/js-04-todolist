/* eslint-disable react/prop-types */
import {
  AiFillCheckCircle,
  AiFillDelete,
  AiFillStar,
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlineStar,
} from 'react-icons/ai'

export const TodoItem = ({
  id,
  isCompleted,
  isFavorite,
  todoName,
  searchTodo,
  todos,
  setTodos,
}) => {
  const completeHandler = () => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const favoriteHandler = () => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          isFavorite: !todo.isFavorite,
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const deleteHandler = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <li className='flex justify-between items-center'>
      <span
        className={`${isCompleted ? 'opacity-50 line-through' : ''} ${
          isFavorite ? 'text-red-500' : ''
        }`}
      >
        {getHighlightedText(todoName, searchTodo)}
      </span>
      <div className='flex gap-1'>
        <button className='text-3xl text-green-500' onClick={completeHandler}>
          {isCompleted ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </button>
        <button className='text-3xl text-yellow-400' onClick={favoriteHandler}>
          {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
        </button>
        <button
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          className='text-3xl text-red-500 group'
          onClick={deleteHandler}
        >
          <AiFillDelete className='hidden group-hover:block' />
          <AiOutlineDelete className='block group-hover:hidden' />
        </button>
      </div>
    </li>
  )
}

function getHighlightedText(text, highlight) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: '#ffff00' } : {}
          }
        >
          {part}
        </span>
      ))}
    </span>
  )
}
