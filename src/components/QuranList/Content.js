import { useRef } from "react";

const Content = ({users}) => {

  const redirectLinkATag = useRef(null)
  const downloadLinkATag = useRef(null)

  const redirectPara = (event, pos) => {
    event.preventDefault()
    const redirectParaLink = process.env.REACT_APP_QURAN_REDIRECTION_LINK_BASE.replace("{{para}}", pos)
    redirectLinkATag.current.href = redirectParaLink
    redirectLinkATag.current.click()
  }

  const downloadPara = (event, pos) => {
    event.preventDefault()
    event.stopPropagation()
    const redirectParaLink = process.env.REACT_APP_PARA_DOWNLOAD_LINK_BASE.replace("{{para}}", pos)
    redirectLinkATag.current.href = redirectParaLink
    redirectLinkATag.current.click()
  }

  return (
    <div>
      {
        users.map(( user, index ) => {
          const pos = index + 1
          return (
            <div key={index} className="bg-sky-100 font-bold text-center w-11/12 md:w-1/2 pt-5 pb-5 mt-4 ml-auto mr-auto" >
              <p>{ user }</p>
              <p className="mb-5">Para Number {pos}</p>
              <div className="grid grid-cols-2">
                <div className="bg-sky-200 ml-4 mr-2 pl-5 pr-5 pt-2 pb-2 font-bold text-center cursor-pointer"
                  onClick={e => redirectPara(e, pos)} >
                  Open
                </div>
                <div className="bg-sky-200 ml-2 mr-4 pl-5 pr-5 pt-2 pb-2 font-bold text-center cursor-pointer"
                  onClick={e => downloadPara(e, pos)} >
                  Download
                </div>
              </div>
            </div>
          )
        })
      }
      <a className="hidden" target="_blank" ref={redirectLinkATag}></a>
      <a className="hidden" target="_blank" ref={downloadLinkATag}></a>
    </div>
  )
}

export default Content;
