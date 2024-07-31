import { useEffect, useState } from "react"

import DesktopView from "./DesktopView"
import MobileView from "./MobileView"
const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  )
  const element = document.documentElement
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme, element])
  return (
    <nav className="navbar">
      <div className="flexBetween container py-2">
        {/* LOGO */}
        <a
          href="#"
          className="hover:text-primary group text-2xl uppercase text-white transition-all md:text-3xl"
        >
          Charily{" "}
          <span className="text-primary font-bold transition-all group-hover:text-white">
            Donations
          </span>
        </a>
        {/* DESKTOP MENU SECTION */}
        <DesktopView theme={theme} setTheme={setTheme} />
        <MobileView theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  )
}

export default Navbar
