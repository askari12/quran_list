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

export default Content;
