import { useState } from "react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
const donationValues = [
  { value: 1, text: "$1" },
  { value: 5, text: "$5" },
  { value: 10, text: "$10" },
  { value: 50, text: "$50" },
]

const DonationForm = () => {
  const [donationValue, setDonationValue] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleOnCLick = () => {
    if (!name || !email) {
      return
    }
    toast.success(`Thanks, ${name} for your donation!`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: -20 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="w-full flex-1 space-y-6 rounded-2xl bg-white/40 p-4 backdrop-blur-lg dark:bg-slate-900/60 dark:text-white"
    >
      <p className="w-full text-center text-xl font-semibold md:text-2xl">
        Quick Donation Form
      </p>
      <div className="flex w-full items-center justify-evenly">
        {donationValues.map((donation) => (
          <div
            key={donation.value}
            className="flexCenter min-w-[60px] cursor-pointer rounded-xl border border-gray-500 bg-gray-300 p-4 font-semibold shadow-sm dark:border-white dark:bg-transparent"
            onClick={() => setDonationValue(donation.value)}
          >
            {donation.text}
          </div>
        ))}
      </div>
      <form className="flex w-full flex-col gap-4 text-white">
        <div className="flex w-full items-center gap-1 rounded-2xl border border-slate-600 bg-transparent px-4 py-2 text-lg font-bold placeholder:text-white/60 focus:outline-none dark:border-gray-300">
          <p>$</p>
          <input
            disabled={donationValue <= 0}
            type="number"
            className="w-full bg-transparent focus:outline-none"
            value={donationValue}
            onChange={(e) => setDonationValue(e.target.value)}
          />
        </div>

        <input
          placeholder="Name"
          type="text"
          className="w-full rounded-2xl border border-slate-600 bg-transparent px-4 py-2 text-lg font-bold placeholder:text-white/60 focus:outline-none dark:border-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          className="w-full rounded-2xl border border-slate-600 bg-transparent px-4 py-2 text-lg font-bold placeholder:text-white/60 focus:outline-none dark:border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button
        onClick={handleOnCLick}
        className="flexCenter w-full rounded-2xl bg-primary py-4 text-lg font-bold text-white transition-all hover:brightness-110 max-md:py-2"
      >
        Donate Now
      </button>
    </motion.div>
  )
}

export default DonationForm
