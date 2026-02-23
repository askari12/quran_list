import { useState } from "react";
import Moment from 'react-moment';

const Title = ({listNumber, title, description, startDate, endDate, onDateChange}) => {

  if (!endDate) endDate = startDate

  const [currentStartDate, setCurrentStartDate] = useState(new Date(startDate));
  const [currentEndDate, setCurrentEndDate] = useState(new Date(endDate));

  const cutOffStartDate = new Date("2026-02-17 05:00:00+00")
  const cutOffEndDate = new Date("2026-03-21 05:00:00+00")


  const handleDateChangePrev = () => {
    const newStart = new Date(currentStartDate);
    const newEnd = new Date(currentEndDate);

    newStart.setDate(newStart.getDate() - 1);
    newEnd.setDate(newEnd.getDate() - 1);

    if (newStart < cutOffStartDate) {
      return
    }

    setCurrentStartDate(newStart);
    setCurrentEndDate(newEnd);
    
    onDateChange(1)
  }

  const handleDateChangeNext = () => {
    const newStart = new Date(currentStartDate);
    const newEnd = new Date(currentEndDate);

    newStart.setDate(newStart.getDate() + 1);
    newEnd.setDate(newEnd.getDate() + 1);

    if (newEnd > cutOffEndDate) {
      return
    }

    setCurrentStartDate(newStart);
    setCurrentEndDate(newEnd);


    onDateChange(-1)
  }

  return (
    <>
      <div className="bg-sky-200 font-bold text-center text-lg md:text-3xl w-11/12 md:w-2/3 pt-5 pb-5 mb-4 ml-auto mr-auto">
        List: {listNumber}
      </div>

      <div className="bg-sky-200 font-bold text-center text-lg md:text-3xl w-11/12 md:w-2/3 pt-5 pb-5 mt-4 ml-auto mr-auto">

        <button
          onClick={handleDateChangePrev}
          className="px-4 py-2 mr-4 bg-white rounded-full shadow hover:bg-gray-200"
        >
          ←
        </button>
        <Moment format='DD MMMM'>{currentStartDate}</Moment> - <Moment format='DD MMMM'>{currentEndDate}</Moment>
        <button
          onClick={handleDateChangeNext}
          className="px-4 py-2 ml-4 bg-white rounded-full shadow hover:bg-gray-200"
        >
          →
        </button>
      </div>

      <div className="bg-sky-200 font-bold text-center text-lg md:text-3xl w-11/12 md:w-2/3 pt-5 pb-5 mt-4 ml-auto mr-auto">
        {title}
      </div>

    <div className="bg-sky-200 font-bold text-center text-lg md:text-3xl w-11/12 md:w-2/3 pl-2 pr-2 pt-5 pb-5 mt-4 ml-auto mr-auto">
        {description.map((item,index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </>
  )
}

export default Title;
