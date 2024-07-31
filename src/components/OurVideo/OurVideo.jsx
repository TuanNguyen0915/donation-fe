const OurVideo = () => {
  return (
    <section className="flexCenter my-20 w-full bg-primary text-white">
      <div className="container flex items-center justify-between gap-10 py-4 max-md:flex-col max-md:gap-4">
        <div className="flex-1">
          <iframe
            className="h-[400px] w-[500px] rounded-xl max-md:h-[300px] xl:w-[600px]"
            src="https://www.youtube.com/embed/dDBWRk_y-CA"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </div>
        <div className="flex-1 space-y-6">
          <p className="textTitle text-5xl">Watch Our Video</p>
          <p className="w-[80%]">
            Thousands of children, students and elders are ready to take the
            first step out of poverty. Your sponsorship helps them get started.
          </p>
          <button
            className="rounded-lg bg-gray-300 px-4 py-2 text-lg text-black"
            type="button"
          >
            Watch more...
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurVideo
