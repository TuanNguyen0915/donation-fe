import { FaCaretDown } from "react-icons/fa6"
import { BiPhoneCall } from "react-icons/bi"
import ThemeToggle from "./ThemeToggle"
const DesktopView = ({ theme, setTheme }) => {
  return (
    <ul className="flexBetween gap-10 text-white max-md:hidden">
      <li className="hover:text-primary group relative flex cursor-pointer items-center gap-1 transition-all">
        Home{" "}
        <span className="transition-all group-hover:rotate-180">
          <FaCaretDown />
        </span>
        <div className="dropdownMenu">
          <div className="flex flex-col gap-4">
            <a href="#" className="dropdownText">
              Services
            </a>
            <a href="#" className="dropdownText">
              Privacy Policy
            </a>
            <a href="#" className="dropdownText">
              About Us
            </a>
          </div>
        </div>
      </li>
      <li>About Us</li>
      <li className="group flex cursor-pointer items-center gap-2">
        <BiPhoneCall className="bg-primary group-hover:bg-primary/80 h-[36px] w-[36px] rounded-md text-white transition-all" />
        <div className="flex flex-col gap-[1px]">
          <p className="capitalize">talk to us</p>
          <p>123 456 7891</p>
        </div>
      </li>
      {/* THEME theme */}
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </ul>
  )
}

export default DesktopView
