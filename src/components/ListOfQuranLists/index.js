import RetryButton from './RetryButton'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuranList } from '../../page/pageReducer'
import axios from 'axios'
import QuranListPageDisplay from './QuranListPageDisplay'

// UPDATE
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
    if (isExpired) {
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
  }, []);

  return (
    <div>
      { showRetryButton === true && 
        <RetryButton callBack={updateQuranList} />
      }
      {
        showRetryButton === false &&
        <QuranListPageDisplay quranList={quranList} />
      }
    </div>
  )
}

export default ListOfQuranLists
