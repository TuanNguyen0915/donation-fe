import HeroImg from "../../assets/donation-2.jpeg"
import CustomButton from "../CustomButton/CustomButton"
import DonationForm from "./DonationForm"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div
      className="mx-auto mt-[70px] bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="relative min-h-[80vh]">
        <div className="absolute h-full w-full bg-gradient-to-r from-black/80 to-primary/60">
          <div className="flexBetween container h-full flex-wrap md:gap-10">
            <div className="flex-1 space-y-10 text-white">
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="textTitle max-w-[80%]"
              >
                Sponsor a child – change a life forever
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                className="max-w-[80%] max-md:line-clamp-2 max-md:w-full"
              >
                Every child needs a safe, nurturing place to call home, and the
                chance to achieve their potential through education. Sadly, not
                every child is so fortunate. Let’s change that.
              </motion.p>
              <div className="flex w-full items-center gap-10 max-md:justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.4,
                  }}
                >
                  <CustomButton
                    text={"Get Started"}
                    bgStyles={"bg-primary border-primary"}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5,
                  }}
                >
                  <CustomButton
                    text={"Login"}
                    bgStyles={"backdrop-blur-lg border-white"}
                  />
                </motion.div>
              </div>
            </div>
            <DonationForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
