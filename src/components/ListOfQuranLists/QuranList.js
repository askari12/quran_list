import { setSelectedList} from '../../page/pageReducer'
import { useDispatch } from 'react-redux'

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

export default QuranList;
