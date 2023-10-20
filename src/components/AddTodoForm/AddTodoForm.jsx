/* eslint-disable react/prop-types */
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export const AddTodoForm = ({ todos, setTodos }) => {
  // стейт инпута для названия тудушки
  const [todoName, setTodoName] = useState('')

  const addTodoHandler = (event) => {
    event.preventDefault()

    if (todoName.length === 0) return

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

  const todoNameHandler = (event) => {
    setTodoName(event.target.value)
  }

  return (
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
  )
}
