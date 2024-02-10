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

  const LOCAL_STORAGE_QL_KEY = "ql"
  const dispatch = useDispatch()
  const quranList = useSelector(state => state.page.quranList)
  const [showRetryButton , setShowRetryButton] = useState(false)

  const updateDataFromServer = () => {
    axios.get(`${process.env.REACT_APP_API}/quranList/getAllLists`)
      .then(response => {
        const quranList = response.data
        dispatch(setQuranList(quranList))
        setDataFromToLocalStorage(JSON.stringify(quranList))
      })
      .catch(e => {
        setShowRetryButton(true)
        console.log(e)
      })
  }

  const isDateBeforeToday = (date) => {
    return new Date(new Date(date).toDateString()) <= new Date(new Date().toDateString());
  }

  const checkIfDataIsExpired = (data) => {
    if (!data || !data[0] || !data[0].endDate) return true

    const firstDataObj = data[0]
    const firstDataObjCreatedAt = firstDataObj.endDate

    const hasEndDatePassed = isDateBeforeToday(firstDataObjCreatedAt)
    return hasEndDatePassed
  }

  const getDataFromLocalStorage = () => {
    const data = localStorage[LOCAL_STORAGE_QL_KEY]
    const jsonParsedData = data ? JSON.parse(data) : null

    const isExpired = checkIfDataIsExpired (jsonParsedData)
    if (!isExpired) {
      localStorage.setItem(LOCAL_STORAGE_QL_KEY, null)
      return null
    }

    return jsonParsedData
  }

  const setDataFromToLocalStorage = (data) => {
    localStorage.setItem(LOCAL_STORAGE_QL_KEY, data)
  }

  const updateDataFromLocalStorage = (data) => {
    dispatch(setQuranList(data))
  }

  const updateQuranList = () => {
    setShowRetryButton(false)

    const data = getDataFromLocalStorage()
    if (data) updateDataFromLocalStorage(data)
    else updateDataFromServer()
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
