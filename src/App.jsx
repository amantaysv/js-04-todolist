import { useState } from 'react'
import { Header } from './components/Header/Header'
import { TodoList } from './components/Todos/TodoList'
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm'

export const App = () => {
  const [todos, setTodos] = useState([])
  const [searchTodo, setSearchTodo] = useState('')
  const [sortButton, setSortButton] = useState('all')

  const searchHandler = (event) => {
    setSearchTodo(event.target.value)
  }

  return (
    <div className='container mx-auto p-2'>
      <h1 className='text-4xl text-center mb-2'>TodoList</h1>
      <Header
        todos={todos}
        sortButton={sortButton}
        setSortButton={setSortButton}
        searchHandler={searchHandler}
      />
      <TodoList todos={todos} setTodos={setTodos} searchTodo={searchTodo} sortButton={sortButton} />
      <AddTodoForm todos={todos} setTodos={setTodos} />
    </div>
  )
}
