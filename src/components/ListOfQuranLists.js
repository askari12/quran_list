import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedList, setQuranList } from '../page/pageReducer'
import axios from 'axios'

const RetryButton = ({callBack}) => {
  return (
    <div className="bg-sky-200 text-center h-24 flex justify-center items-center m-2 cursor-pointer" onClick={callBack}>
      Retry
    </div>
  )
}

const QuranList = ({obj}) => {

  const dispatch = useDispatch()
  const listNumber = obj + 1

  const changePage = () => {
    dispatch(
      setSelectedList(
        listNumber
      )
    )
  }

  return (
    <div className="bg-sky-200 text-center h-24 flex justify-center items-center m-2 cursor-pointer" onClick={changePage}>
      List Number {listNumber}
    </div>
  )
}

const ListOfQuranLists = () => {

  const dispatch = useDispatch()
  const quranList = useSelector(state => state.page.quranList)
  const [showRetryButton , setShowRetryButton] = useState(false)

  const updateQuranList = () => {
    setShowRetryButton(false)

    const API = "https://quran-list-backend.vercel.app"
    axios.get(`${API}/quranList/getAllLists`)
      .then(response => {
        const quranList = response.data
        dispatch(setQuranList(quranList))
      })
      .catch(e => {
        setShowRetryButton(true)
        console.log(e)
      })
  }

  useEffect(() => {
    updateQuranList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-2">
      { showRetryButton === true && 
        <RetryButton callBack={updateQuranList} />
      }
      {
        showRetryButton === false &&
        quranList?.map((object, i) => <QuranList obj={i} key={i} />)
      }
    </div>
  )
}

export default ListOfQuranLists
