import isbTimingObj from "./isb"
import './index.css'
import {useState, useEffect} from "react"
import { format } from 'date-fns';

const NamazTimingPage = () => {

  const [namazTime, setNamazTime] = useState({fajrTime: 1, dhuhrTime: 1, magrabainTime: 1})
  const [currentDateFormatted, setCurrentDateFormatted] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date())

  const setDayToday = () => {
    setCurrentDate(new Date())
  }

  const setDayBack = () => {
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    setCurrentDate(yesterday)
  }

  const setDayForward = () => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);

    setCurrentDate(tomorrow)
  }

  useEffect (() => {
    const formattedDate = format(currentDate, 'MMMM d');
    const namazTimeToday = isbTimingObj[formattedDate]

    setCurrentDateFormatted(formattedDate)

    setNamazTime({
      fajrTime: namazTimeToday.Fajr,
      dhuhrTime: namazTimeToday.Zohr,
      magrabainTime: namazTimeToday.Maghrib
    })

  }, [currentDate])

  return (
    <>
      <h1 className="pb-0"> ISLAMABAD NAMAZ TIMINGS </h1>
      <div className="flex justify-center items-center">
        <div className="mr-10 cursor-pointer" onClick={setDayBack}>&lt;</div>
        <h1 className="cursor-pointer" onClick={setDayToday}> {currentDateFormatted} </h1>
        <div className="ml-10 cursor-pointer" onClick={setDayForward}>&gt;</div>
      </div>
      <div id="prayerTimes">
      <table>
        <tr>
          <th>Prayer</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>Fajr</td>
          <td id="fajrTime">{namazTime.fajrTime}</td>
        </tr>
        <tr>
          <td>Dhuhrain</td>
          <td id="dhuhrTime">{namazTime.dhuhrTime}</td>
        </tr>
        <tr>
          <td>Maghribain</td>
          <td id="maghribTime">{namazTime.magrabainTime}</td>
        </tr>
      </table>
    </div>
    </>
  )

}

export default NamazTimingPage;
