/* eslint-disable react/prop-types */
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export const AddTodoForm = ({ todos, setTodos, errorState, setErrorState }) => {
  // стейт инпута для названия тудушки
  const [todoName, setTodoName] = useState('')

  const addTodoHandler = (event) => {
    event.preventDefault()

    if (todoName.trim().length === 0) return
    if (todos.find((todo) => todo.todoName.toLowerCase() === todoName.toLowerCase())) {
      setErrorState('туду с таким названием уже существует')
      return
    }

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
        isDeleted: false,
      },
    ])

    // после добавления тудушки, очищаем инпут
    setTodoName('')
    setErrorState(null)
  }

  const todoNameHandler = (event) => {
    setTodoName(event.target.value)

    if (errorState) setErrorState(null)
  }

  return (
    <form onSubmit={addTodoHandler} className='relative flex items-center'>
      {/* делаем наш инпут контролируемым */}
      <input
        type='text'
        placeholder='add todo...'
        value={todoName}
        onChange={todoNameHandler}
        className={`w-full h-10 pl-2 border border-solid ${
          errorState
            ? 'border-red-500 focus:border-red-600'
            : 'border-purple-600 focus:border-purple-700'
        } outline-none rounded-lg`}
      />
      <button type='submit' className='absolute right-2 text-3xl'>
        <AiOutlinePlus />
      </button>
    </form>
  )
}
