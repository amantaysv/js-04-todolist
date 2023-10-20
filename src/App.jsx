import { useState } from 'react'
import {
  AiFillCheckCircle,
  AiFillDelete,
  AiFillStar,
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineStar,
} from 'react-icons/ai'

export const App = () => {
  // save to localstorage

  // создали пустой массив для тудушек
  const [todos, setTodos] = useState([])
  console.log('App ~ todos:', todos)

  // стейт инпута для названия тудушки
  const [todoName, setTodoName] = useState('')

  // стейт для поиска .
  const [searchTodo, setSearchTodo] = useState('')

  // функиця которая меняет стейт при вводе данных в инпут
  const todoNameHandler = (event) => {
    setTodoName(event.target.value)
  }

  // функция которая добавляет в массив тудушек, одну тудушку
  const addTodoHandler = (event) => {
    event.preventDefault()

    setTodos([
      // все что было до этого в массиве
      ...todos,
      // + 1 новая тудушка
      {
        id: new Date().getTime(),
        // имя тудушки из инпута
        todoName: todoName,
        isCompleted: false,
        isFavorite: false,
      },
    ])

    // после добавления тудушки, очищаем инпут
    setTodoName('')
  }

  const searchHandler = (event) => {
    setSearchTodo(event.target.value)
  }

  const completeHandler = (id) => {
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

  const favoriteHandler = (id) => {
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

  const deleteHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  // const [isHovered, setIsHovered] = useState(false)
  // console.log('App ~ isHovered:', isHovered)

  return (
    <div className='container mx-auto p-2'>
      <h1 className='text-4xl text-center mb-2'>TodoList</h1>
      <div className='flex justify-between items-center gap-4 mb-4'>
        <div className='flex gap-1'>
          <button className='min-w-[80px] h-10 px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg capitalize transition-colors duration-300'>
            all
          </button>
          <button className='min-w-[80px] h-10 px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg capitalize transition-colors duration-300'>
            active
          </button>
          <button className='min-w-[80px] h-10 px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg capitalize transition-colors duration-300'>
            favorite
          </button>
        </div>
        <div className='flex-1'>
          <input
            className='w-full h-10 pl-2 border border-solid border-purple-600 focus:border-purple-700 outline-none rounded-lg'
            type='text'
            placeholder='search...'
            onChange={searchHandler}
          />
        </div>
        <div className=''></div>
      </div>
      <ul className='flex flex-col mb-4'>
        {todos
          .filter((todo) => todo.todoName.includes(searchTodo))
          .map((todo) => (
            <li className='flex justify-between items-center' key={todo.id}>
              <span
                className={`${todo.isCompleted ? 'opacity-50 line-through' : ''} ${
                  todo.isFavorite ? 'text-red-500' : ''
                }`}
              >
                {getHighlightedText(todo.todoName, searchTodo)}
              </span>
              <div className='flex gap-1'>
                <button
                  className='text-3xl text-green-500'
                  onClick={() => completeHandler(todo.id)}
                >
                  {todo.isCompleted ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
                </button>
                <button
                  className='text-3xl text-yellow-400'
                  onClick={() => favoriteHandler(todo.id)}
                >
                  {todo.isFavorite ? <AiFillStar /> : <AiOutlineStar />}
                </button>
                <button
                  // onMouseEnter={() => setIsHovered(true)}
                  // onMouseLeave={() => setIsHovered(false)}
                  className='text-3xl text-red-500 group'
                  onClick={() => deleteHandler(todo.id)}
                >
                  <AiFillDelete className='hidden group-hover:block' />
                  <AiOutlineDelete className='block group-hover:hidden' />
                </button>
              </div>
            </li>
          ))}
      </ul>

      {/* добавили форму чтобы можно было добавлять туду при нажатии клавиши enter */}
      <form onSubmit={addTodoHandler} className='relative flex items-center'>
        {/* делаем наш инпут контролируемым */}
        <input
          type='text'
          placeholder='add todo...'
          value={todoName}
          onChange={todoNameHandler}
          className='w-full h-10 pl-2 border border-solid border-purple-600 focus:border-purple-700 outline-none rounded-lg'
        />
        <button type='submit' className='absolute right-2 text-3xl'>
          <AiOutlinePlus />
        </button>
      </form>
    </div>
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
