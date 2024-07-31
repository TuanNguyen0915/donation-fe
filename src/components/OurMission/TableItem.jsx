const TableItem = ({ data }) => {
  return (
    <div
      className={`${data.borderTop} flexCenter group w-full flex-col gap-4 border-t-2 p-4 shadow-lg transition-all duration-500 hover:rounded-2xl hover:border-2 hover:border-t-4`}
    >
      <p className="h-[60px] w-full text-center text-xl font-semibold opacity-60 group-hover:opacity-100">
        {data.title}
      </p>
      <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
        <div className="absolute h-full w-full rounded-2xl bg-gradient-to-b from-black/60 to-primary/30 group-hover:hidden" />
        <img
          src={data.img}
          alt={data.title}
          loading="lazy"
          className="h-full w-full rounded-2xl transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <p className="opacity-40 transition-all group-hover:opacity-70">
        {data.content1}
      </p>

      <div className="flex w-full items-end justify-start max-md:justify-center opacity-60 transition-all group-hover:opacity-100">
        <button
          type="button"
          className={`${data.bgColor} rounded-xl px-4 py-2`}
        >
          Read more ...
        </button>
      </div>
    </div>
  )
}

export default TableItem
