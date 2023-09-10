import { useDispatch } from 'react-redux'
import { setSelectedList } from '../page/pageReducer'

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

  const list = [0,1,2,3,4,5]

  return (
    <div className="grid grid-cols-2">
      {list.map((object, i) => <QuranList obj={object} key={i} />)}
    </div>
  )
}

export default ListOfQuranLists
