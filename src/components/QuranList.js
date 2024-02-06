import { useSelector, useDispatch } from 'react-redux'
import { goBackToMainPage } from '../page/pageReducer'
import Moment from 'react-moment';

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

const Title = ({listNumber, title, description, startDate, endDate}) => {
  return (
    <>
      <div className="bg-sky-200 font-bold text-center text-3xl w-2/3 pt-5 pb-5 mb-4 ml-auto mr-auto">
        List: {listNumber}
      </div>

      <div className="bg-sky-200 font-bold text-center text-3xl w-2/3 pt-5 pb-5 mt-4 ml-auto mr-auto">
        <Moment format='DD MMMM'>{startDate}</Moment> - <Moment format='DD MMMM'>{endDate}</Moment>
      </div>

      <div className="bg-sky-200 font-bold text-center text-3xl w-2/3 pt-5 pb-5 mt-4 ml-auto mr-auto">
        {title}
      </div>

    <div className="bg-sky-200 font-bold text-center text-3xl w-2/3 pt-5 pb-5 mt-4 ml-auto mr-auto">
        {description.map((item,index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </>
  )
}

const Content = ({users}) => {
  return (
    <div>
      {
        users.map(( user, index ) => {
          const pos = index + 1
          return (
            <div key={index} className="bg-sky-100 font-bold text-center w-1/2 pt-5 pb-5 mt-4 ml-auto mr-auto">
              <p>{ user }</p>
              <p>Para Number {pos}</p>
            </div>
          )
        })
      }
    </div>
  )
}

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
