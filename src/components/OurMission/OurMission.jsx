import { motion } from "framer-motion"
import Chart from "./Chart"
import MissionTable from "./MissionTable"

const OurMission = () => {
  return (
    <section className="flexCenter mt-28 w-full flex-col bg-[##eef1f7] text-black dark:text-white">
      <div className="flexBetween container gap-10 max-2xl:flex-col">
        <div className="group flex flex-1 flex-col items-center justify-between gap-10 2xl:items-start">
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="textTitle tracking-wider"
          >
            Where your money goes
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="font-sm w-[80%] opacity-60 transition-all group-hover:opacity-100"
          >
            We ensure contributions work hard to meet sponsored friends’ needs,
            resulting in top ratings from independent charity evaluators. We’re
            committed to keeping our costs low to send the maximum amount of
            support where it’s needed most. Our sponsored friends, and our
            sponsors, deserve that.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              stiffness: 100,
              delay: 0.4,
            }}
            className="flexCenter rounded-xl bg-primary px-8 py-4 text-xl font-bold text-white transition-all hover:brightness-110"
          >
            Our Financial
          </motion.div>
        </div>
        <div className="flexCenter h-[300px] w-full flex-1">
          <Chart />
        </div>
      </div>
      <div className="flexCenter my-20 w-full">
        <MissionTable />
      </div>
    </section>
  )
}

export default OurMission
