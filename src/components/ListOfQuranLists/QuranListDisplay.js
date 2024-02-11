import QuranList from "./QuranList"

const QuranListDisplay = ({quranList}) => {

  return (
    <div className="grid grid-cols-2">
      {
        quranList?.map((object, i) => <QuranList obj={i} key={i} />)
      }
    </div>
  )

}

export default QuranListDisplay;
