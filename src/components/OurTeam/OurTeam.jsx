import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const dataTeam = [
  {
    name: "Hannah",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    content:
      "If you’re considering sponsoring, do it. You’re going to quickly find that you’ll be glad you did because you’re going to make a difference someone’s life and, surprisingly, in your own as well.",
  },
  {
    name: "Anthony",
    role: "sponsor and volunteer",
    image:
      "https://images.unsplash.com/photo-1589696709173-2bf10335574a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Sponsoring Brendy and Pedro has been so fulfilling. It’s been wonderful to share their joy for their love of math, their love of soccer, to hear about their families. We’ve also enjoyed telling them about our lives and about us so they can get to know us a little better, too.",
  },
  {
    name: "Leon",
    role: "sponsored youth",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    content:
      "I am proud to say that I am part of Unbound. It gives me a lot of learnings and values that I am using right now. I am focus on my goal to be a lawyer someday because you showed me the way to look forward and aim big.",
  },
]

const OurTeam = () => {
  return (
    <div className="flexCenter relative my-10 w-full text-black dark:text-white">
      <div className="flexCenter container flex-col gap-10">
        <p className="textTitle">Meet Our Team</p>
        <div className="h-[500px] w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper flex h-4/5 w-full rounded-xl"
          >
            {dataTeam.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="z-10 flex h-4/5 w-full flex-col items-center justify-between gap-4 rounded-2xl border border-primary p-4">
                  <div className="relative h-28 w-28 rounded-full">
                    <img
                      src={data.image}
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                  <div className="flexBetween flex-col gap-10 px-10">
                    <p className="line-clamp-2 text-pretty text-xl italic leading-10">
                      &quot;{data.content}&quot;
                    </p>
                    <p className="text-2xl font-bold uppercase tracking-wider text-primary">
                      {data.name} - {data.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
