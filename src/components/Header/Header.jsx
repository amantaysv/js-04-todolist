/* eslint-disable react/prop-types */

import { Search } from './components/Search'
import { SortButton } from './components/SortButton'
import { StatusCounter } from './components/StatusCounter'

export const Header = (props) => {
  const { todos, sortButton, setSortButton, searchHandler } = props

  return (
    <div className='flex justify-between items-center gap-4 mb-4'>
      <div className='flex gap-1'>
        <SortButton value='all' sortButton={sortButton} setSortButton={setSortButton} />
        <SortButton value='active' sortButton={sortButton} setSortButton={setSortButton} />
        <SortButton value='favorite' sortButton={sortButton} setSortButton={setSortButton} />
        <SortButton value='deleted' sortButton={sortButton} setSortButton={setSortButton} />
      </div>
      <div className='flex-1'>
        <Search searchHandler={searchHandler} />
      </div>
      <StatusCounter todos={todos} />
    </div>
  )
}
