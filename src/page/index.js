import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ListOfQuranLists from "../components/ListOfQuranLists"
import QuranList from "../components/QuranList"

const Page = () => {

  const pageState = useSelector(state => state.page)
  const [selectedList, setSelectedList] = useState(0)

  useEffect( () => {
    setSelectedList(pageState.selectedList)
  }, [pageState.selectedList])
  
  return (
    <>
    {
      selectedList === 0 &&
      <ListOfQuranLists />
    }
    {
      selectedList !== 0 &&
      <QuranList />
    }
    </>
  )
}

export default Page
