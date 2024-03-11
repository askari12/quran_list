import { useRef } from "react";
import Moment from "react-moment";

const SearchBarResultSection = ({filteredUsers}) => {

  const redirectLinkATag = useRef(null)
  const downloadLinkATag = useRef(null)

  const redirectPara = (event, user) => {
    event.preventDefault()
    const redirectParaLink = process.env.REACT_APP_QURAN_REDIRECTION_LINK_BASE.replace("{{para}}", user.para + 1)
    redirectLinkATag.current.href = redirectParaLink
    redirectLinkATag.current.click()
  }

  const downloadPara = (event, user) => {
    event.preventDefault()
    event.stopPropagation()
    const redirectParaLink = process.env.REACT_APP_PARA_DOWNLOAD_LINK_BASE.replace("{{para}}", user.para + 1)
    redirectLinkATag.current.href = redirectParaLink
    redirectLinkATag.current.click()
  }

  return (
    <>
      {
        filteredUsers.map((item, index) => {
          return <div className="bg-sky-100 font-bold text-center w-11/12 md:w-1/2 pt-5 pb-5 mt-4 ml-auto mr-auto" key={index} >
                    <p>{item.user}</p>
                    <p>Quran List: {item.quranListIndex + 1}</p>
                    <p>Para: {item.para + 1}</p>
                    <Moment format='DD MMMM'>{item.startDate}</Moment>
                    <div className="grid grid-cols-2 mt-5">
                        <div className="bg-sky-200 ml-4 mr-2 pl-5 pr-5 pt-2 pb-2 font-bold text-center cursor-pointer"
                          onClick={e => redirectPara(e, item)} >
                          Open
                        </div>
                        <div className="bg-sky-200 ml-2 mr-4 pl-5 pr-5 pt-2 pb-2 font-bold text-center cursor-pointer"
                          onClick={e => downloadPara(e, item)} >
                          Download
                        </div>
                      </div>
                 </div>
        })
      }
      <a className="hidden" target="_blank" ref={redirectLinkATag}></a>
      <a className="hidden" target="_blank" ref={downloadLinkATag}></a>
    </>
  )

}

export default SearchBarResultSection;
