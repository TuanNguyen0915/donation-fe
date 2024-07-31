import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

import { HiMenuAlt2 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import { FaUserCircle } from "react-icons/fa"

const MobileView = ({ theme, setTheme }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuOpened = "right-0 transition-all duration-500"
  return (
    <div className="flex items-center gap-4 text-white md:hidden">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <HiMenuAlt2
        className="hover:text-primary cursor-pointer text-3xl transition-all hover:skew-y-12"
        onClick={() => setOpenMenu(!openMenu)}
      />
      <div
        className={`${openMenu ? menuOpened : "right-[-100%]"} fixed right-0 top-0 z-50 h-full w-2/3 rounded-l-2xl bg-white/90 backdrop-blur-sm dark:bg-slate-900`}
      >
        <div
          className={`${openMenu ? menuOpened : "right-[-100%]"} flex h-full w-full flex-col gap-10 p-4 text-black dark:text-white`}
        >
          <CgClose
            onClick={() => setOpenMenu(!openMenu)}
            className={`hover:text-primary cursor-pointer text-3xl transition-all`}
          />

          <div className="flex w-full flex-1 flex-col justify-between">
            <div className="flex w-full flex-1 flex-col gap-16">
              <div className="flex w-full items-center justify-center gap-4">
                <FaUserCircle size={60} />
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-bold">Tuan Nguyen</p>
                  <p className="italic">123 456 7891</p>
                </div>
              </div>
              <div className="flex w-full flex-col items-end gap-4">
                <ul className="space-y-6 text-end text-xl font-semibold tracking-wide">
                  <li className="hover:text-primary transition-all">
                    <a href="#">Home</a>
                  </li>
                  <li className="hover:text-primary transition-all">
                    <a href="#">Services</a>
                  </li>
                  <li className="hover:text-primary transition-all">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm italic opacity-80">
              © 2024 Tuan Nguyen. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileView
