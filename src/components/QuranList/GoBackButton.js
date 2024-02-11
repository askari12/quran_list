import { useDispatch } from 'react-redux'
import { goBackToMainPage } from '../../page/pageReducer'

const GoBackButton = () => {

  const dispatch = useDispatch()

  const goBack = () => {
    dispatch(goBackToMainPage())
  }

  return (
    <div className="bg-sky-200 font-bold text-center w-1/3 pt-3 pb-3 mb-4 ml-auto mr-auto cursor-pointer"
      onClick={goBack}
    >
      Go Back
    </div>
  )
}

export default GoBackButton;
