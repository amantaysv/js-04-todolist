/* eslint-disable react/prop-types */

export const EmptyState = ({ todos, sortButton }) => {
  if (sortButton === 'all') {
    if (todos.length === 0) {
      return <div className='h-[80px] flex justify-center items-center'>добавь туду</div>
    }
  }

  if (sortButton === 'active') {
    if (todos.filter((todo) => !todo.isCompleted).length === 0) {
      return <div className='h-[80px] flex justify-center items-center'>все туду выполнены</div>
    }
  }

  if (sortButton === 'favorite') {
    if (todos.filter((todo) => todo.isFavorite).length === 0) {
      return <div className='h-[80px] flex justify-center items-center'>нет избранных туду</div>
    }
  }

  if (sortButton === 'deleted') {
    if (todos.filter((todo) => todo.isDeleted).length === 0) {
      return <div className='h-[80px] flex justify-center items-center'>корзина пустая</div>
    }
  }

  return null
}
