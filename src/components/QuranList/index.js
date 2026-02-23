import GoBackButton from './GoBackButton'
import Title from './Title'
import Content from './Content'
import CopyButton from './CopyButton'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const QuranList = () => {

  const pageState = useSelector(state => state.page)
  const selectedList = pageState.selectedList
  const totalQuranList = pageState.quranList
  const listIndex = selectedList - 1
  const quranList = totalQuranList.length > listIndex ? totalQuranList[listIndex] : {}

  const [quranListUsers, setQuranListUsers] = useState(quranList?.users)

  const handleDateChange = (numDays) => {
    if (numDays > 0) {
      const rotatedList = rotateLeft(quranListUsers , numDays)
      setQuranListUsers(rotatedList)
    }

    if (numDays < 0) {
      const rotatedList = rotateRight(quranListUsers , -1 * numDays)
      setQuranListUsers(rotatedList)
    }
  }

  const rotateRight = (arr, shift) => {
    const n = arr.length;
    const k = shift % n; // handle shifts larger than array
    
    if (n === 0) return arr;
    if (k === 0) return arr.slice();
    
    return arr.slice(-k).concat(arr.slice(0, n - k));
  }

  const rotateLeft = (arr, shift) => {
    const n = arr.length;
    const k = shift % n; // handle shifts larger than array
    
    if (n === 0) return arr;
    if (k === 0) return arr.slice();
    
    return arr.slice(k).concat(arr.slice(0, k));
  }

  return (
    <>
      <GoBackButton />
      {quranList && <CopyButton description={quranList.description} listNumber={selectedList} startDate={quranList.startDate} users={quranListUsers} /> }
      {quranList && <Title title={quranList.title} listNumber={selectedList} description={quranList.description} startDate={quranList.startDate} endDate={quranList.endDate} onDateChange={handleDateChange}/> }
      {quranList && <Content users={quranListUsers} /> }
    </>
  )
}

export default QuranList
