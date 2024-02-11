import GoBackButton from './GoBackButton'
import Title from './Title'
import Content from './Content'
import { useSelector } from 'react-redux'

const QuranList = () => {

  const pageState = useSelector(state => state.page)
  const selectedList = pageState.selectedList
  const totalQuranList = pageState.quranList
  const listIndex = selectedList - 1
  const quranList = totalQuranList.length > listIndex ? totalQuranList[listIndex] : {}

  return (
    <>
      <GoBackButton />
      {quranList && <Title title={quranList.title} listNumber={selectedList} description={quranList.description} startDate={quranList.startDate} endDate={quranList.endDate} /> }
      {quranList && <Content users={quranList.users} /> }
    </>
  )
}

export default QuranList
