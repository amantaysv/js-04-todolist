/* eslint-disable react/prop-types */

export const Search = ({ searchHandler }) => {
  return (
    <input
      className='w-full h-10 pl-2 border border-solid border-purple-600 focus:border-purple-700 outline-none rounded-lg'
      type='text'
      placeholder='search...'
      onChange={searchHandler}
    />
  )
}
