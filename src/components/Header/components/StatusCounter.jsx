/* eslint-disable react/prop-types */

export const StatusCounter = ({ todos }) => {
  return (
    <div>
      <p>ostalos: {todos.filter((todo) => !todo.isCompleted).length}</p>
      <p>vipolneno: {todos.filter((todo) => todo.isCompleted).length}</p>
    </div>
  )
}
