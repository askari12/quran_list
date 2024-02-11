const RetryButton = ({callBack}) => {
  return (
    <div className="bg-sky-200 text-center h-24 flex justify-center items-center m-2 cursor-pointer" onClick={callBack}>
      Retry
    </div>
  )
}

export default RetryButton
