import CountUp from "react-countup"
import { motion } from "framer-motion"
const fundValues = [
  { text: "Fundraisers", value: 234, hundred: false },
  { text: "Raised", value: 56, hundred: false },
  { text: "Donation", value: 123, hundred: true },
  { text: "Volunteers", value: 5, hundred: true },
]
const FundCounter = () => {
  return (
    <div className="flexCenter w-full xl:-translate-y-10">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="flex w-[80%] items-center justify-evenly rounded-lg bg-white px-10 py-4 shadow-md dark:bg-slate-900 max-md:w-full max-md:px-2"
      >
        {fundValues.map((fund, idx) => (
          <div
            key={idx}
            className={`${idx < fundValues.length - 1 && "border-r-4 border-black dark:border-white max-md:border-r-2"} flexCenter flex-1 flex-col text-black dark:text-white`}
          >
            <p className="text-4xl font-bold max-md:text-2xl">
              <CountUp
                start={0}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                end={fund.value}
                duration={3}
              />{" "}
              {fund.hundred ? "k+" : "k"}
            </p>
            <p className="max-md:text-md text-md tracking-wider opacity-80">
              {fund.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default FundCounter
