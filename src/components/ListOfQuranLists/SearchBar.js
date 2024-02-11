import { useState, useEffect } from 'react'
import SearchBarResultSection from './SearchBarResultSection'

const SearchBar = ({quranList}) => {

  let allUsers = []
  quranList.forEach((item, quranListIndex) => {
    allUsers = [...allUsers, ...item.users.map((user, userIndex) => {
      return {
        quranListIndex,
        userIndex,
        user,
        startDate: item.startDate,
        endDate: item.endDate
      }
    })]
  })

  const [searchText , setSearchText] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect (() => {
    if (!searchText || searchText == "") {
      setFilteredUsers([])
      return
    }

    const tempFilteredUsers = allUsers.filter(item => {
      return (item?.user?.toLowerCase())?.includes(searchText?.toLowerCase())
    })
    setFilteredUsers(tempFilteredUsers)
  }, [searchText])

  return (
    <>
      <div className="flex items-center border-b border-teal-500 py-2 pl-10 pr-10">
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Search Name" onChange={ e => setSearchText(e.target.value)} />
      </div>
      <SearchBarResultSection filteredUsers={filteredUsers} />
    </>
  )
}

export default SearchBar;
