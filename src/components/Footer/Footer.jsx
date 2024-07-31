import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="mt-10 rounded-t-[40px] bg-gradient-to-r from-violet-900 via-violet-800 to-violet-900 text-gray-300">
      <div className="container grid grid-cols-2 gap-10 p-4 lg:grid-cols-3">
        <div className="w-full space-y-4">
          <p className="text-2xl font-semibold tracking-wide text-primary">
            Be Informed
          </p>
          <p className="w-4/5">
            Stay up to date with inspiring stories and the latest news from Us.
          </p>
          <button className="flexCenter rounded-xl bg-primary px-4 py-2 text-white">
            Sign Me Up
          </button>
        </div>
        {/* QUICK LINKS */}
        <div className="flex w-full justify-between gap-4">
          <div className="w-full space-y-4">
            <p className="text-xl font-semibold text-white">Learn</p>
            <div className="flex flex-col gap-4">
              <a href="" className="transition-all hover:text-primary">
                About
              </a>
              <a href="" className="transition-all hover:text-primary">
                FAQs
              </a>
            </div>
          </div>
          <div className="w-full space-y-4">
            <p className="w-full text-end text-xl font-semibold text-white">
              Connect
            </p>
            <div className="flex flex-col items-end gap-4">
              <a href="" className="transition-all hover:text-primary">
                Contact Us
              </a>
              <a href="" className="transition-all hover:text-primary">
                Employment
              </a>
              <a href="" className="transition-all hover:text-primary">
                MediaCenter
              </a>
            </div>
          </div>
        </div>
        {/* INFO */}
        <div className="w-full">
          <div className="w-full space-y-4">
            <p className="w-full text-2xl font-semibold tracking-wide text-white lg:text-end">
              CHARILY <span className="text-primary">DONATION</span>
            </p>
            <div className="flex w-full flex-col gap-2 lg:items-end">
              <p className="w-full md:w-2/3">
                We partners with families living in poverty, empowering them to
                become self-sufficient and fulfill their desired potential.
              </p>
              <p>Main st, Quincy</p>
              <p>MA, 02169</p>
              <p>123-456-7891</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 h-[2px] w-full bg-primary" />
      <div className="flexCenter gap4 container flex-col">
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
      <div className="flexCenter w-full gap-4 pb-4">
        <BiLogoFacebookCircle size={30} className="text-white hover:text-primary hover:scale-110 transition-all"/>
        <BiLogoTwitter size={30} className="text-white hover:text-primary hover:scale-110 transition-all"/>
        <BiLogoInstagramAlt size={30} className="text-white hover:text-primary hover:scale-110 transition-all"/>
        <BiLogoYoutube size={30} className="text-white hover:text-primary hover:scale-110 transition-all"/>
      </div>
    </footer>
  )
}

export default Footer
