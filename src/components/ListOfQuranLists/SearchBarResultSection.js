import Moment from "react-moment";

const SearchBarResultSection = ({filteredUsers}) => {

  return (
    <>
    {
      filteredUsers.map((item, index) => {
        return <div className="bg-sky-100 font-bold text-left pl-10 w-1/2 pt-5 pb-5 mt-4 ml-auto mr-auto" key={index}>
                  <p>{item.user}</p>
                  <p>Quran List: {item.quranListIndex + 1}</p>
                  <Moment format='DD MMMM'>{item.startDate}</Moment> - <Moment format='DD MMMM'>{item.endDate}</Moment>
               </div>
      })
    }
    </>
  )

}

export default SearchBarResultSection;
