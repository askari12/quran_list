import RetryButton from './RetryButton'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuranList } from '../../page/pageReducer'
import axios from 'axios'
import QuranListPageDisplay from './QuranListPageDisplay'
import list1 from "../../raw_data/list1.json"

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

  const getDataFromFrontend = () => {
    let compiledList = [list1]
    let alteredList = []

    const currentDate = getCurrentDate()
    compiledList.forEach(listData => {

      const tempListData = JSON.parse(JSON.stringify(listData))

      const listStartDate = new Date(tempListData.startDate)
      const diffInDays = getDiffInDays(listStartDate, currentDate)
      tempListData.users = rotateRight(tempListData.users, diffInDays)
      tempListData.startDate = currentDate.toISOString()

      alteredList.push(tempListData)
    })

    return alteredList
  }

  const getDiffInDays = (d1, d2) => {
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);

    const diffInMs = d2 - d1;
    return Math.round(diffInMs / (1000 * 60 * 60 * 24));
  }

  const rotateRight = (arr, shift) => {
    const n = arr.length;
    const k = shift % n; // handle shifts larger than array
    return arr.slice(-k).concat(arr.slice(0, n - k));
  }

  const getCurrentDate = () => {
    const currentDate = new Date()
    currentDate.setHours(5, 0, 0, 0);
    return currentDate
  }


  const updateQuranList = () => {
    setShowRetryButton(false)

    const data = getDataFromFrontend()
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
