import img3 from "../../assets/donation-3.jpeg"
import img4 from "../../assets/donation-4.jpeg"
import img5 from "../../assets/donation-5.jpeg"

const latestBlogsData = [
  {
    title:
      "Massive floods from Typhoon Carina force families to flee their homes",
    content:
      "Intense flooding and rain-induced landslides brought about by Super Typhoon Carina have impacted more than 2,500 Unbound sponsored individuals and their families and mobilized Unbound teams to deliver aid.",
    date: "Jun 11, 2024",
    author: "Glenn Love",
    img: img3,
  },
  {
    title: "Friendship in a letter",
    content:
      "After 14 years of sharing with each other about their lives via letters, a sponsor and his sponsored friend meet in person on an Unbound Awareness Trip.",
    date: "Jun 1, 2024",
    author: "Harriet Blair",
    img: img4,
  },
  {
    title: "Nazario’s new chapter",
    content:
      "WATCH: Nazario, an 83-year-old grandfather, is able to continue the craft that he loves — basket weaving — with the support and renewed hope he finds through elder sponsorship.",
    date: "Jul 25, 2024",
    author: "Alberta Patton",
    img: img5,
  },
]
const LatestBlog = () => {
  return (
    <div className="my-10 text-black dark:text-white">
      <div className="container space-y-10">
        <p className="textTitle w-full text-center">News & Stories</p>
        <p className="w-full text-center text-xl">
          Latest stories from our friends around the world
        </p>
        <div className="grid grid-cols-2 place-items-center gap-6 lg:grid-cols-3">
          {latestBlogsData.map((data, idx) => (
            <div
              className="group w-full rounded-2xl p-1 pb-4 shadow-lg"
              key={idx}
            >
              <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl">
                <div className="absolute h-full w-full rounded-t-2xl bg-black/50" />
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-full w-full rounded-t-2xl object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-[4px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              <div className="mt-2 space-y-4">
                <div className="flexBetween text-sm italic">
                  <p>{data.date}</p>
                  <p>By {data.author}</p>
                </div>
                <p className="line-clamp-1 text-lg font-semibold dark:text-primary text-black opacity-80">
                  {data.title}
                </p>
                <p className="line-clamp-4 opacity-60">{data.content}</p>
                <button className="flexCenter rounded-xl bg-primary px-4 py-2 text-white transition-all hover:brightness-110">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestBlog
