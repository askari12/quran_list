import Moment from 'react-moment';

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

export default Title;
