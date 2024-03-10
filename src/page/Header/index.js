
import { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

  const QURAN_LIST_PATHNAME = "/";
  const NAMAZ_TIMINGS_PATHNAME = "/namazTimings";

  const [activePage, setActivePage] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect (() => {
    const locationPathName = location.pathname
    setActivePage(locationPathName)
  }, [])

  const redirectToQuranList = () => {
    navigate(QURAN_LIST_PATHNAME)
  }

  const redirectToNamazTimings = () => {
    navigate(NAMAZ_TIMINGS_PATHNAME)
  }

  return (
    <>
      <div className="flex justify-between pt-10 md:w-1/2 ml-auto mr-auto">
        <div className={`bg-red-100 w-screen text-center pt-2 pb-2 cursor-pointer hover:bg-red-200`}
          onClick={redirectToQuranList}
        >
          Quran List
        </div>
        <div className="bg-blue-100 w-screen text-center pt-2 pb-2 cursor-pointer hover:bg-blue-200"
          onClick={redirectToNamazTimings}
        >
          Namaz Timings
        </div>
      </div>
    </>
  )
}

export default Header;
