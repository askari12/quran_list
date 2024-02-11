import QuranListDisplay from "./QuranListDisplay";
import SearchBar from "./SearchBar"

const QuranListPageDisplay = ({quranList}) => {

  return (
    <>
      <SearchBar quranList={quranList} />
      <QuranListDisplay quranList={quranList}/>
    </>
  )

}

export default QuranListPageDisplay;
