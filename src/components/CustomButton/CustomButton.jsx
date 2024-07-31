const CustomButton = ({ bgStyles, text }) => {
  return (
    <button
      className={`${bgStyles} max-md:w-[150px] md:min-w-[200px] rounded-lg border-2 p-2 text-center text-lg font-bold transition-all hover:brightness-110`}
    >
      {text}
    </button>
  )
}

export default CustomButton
