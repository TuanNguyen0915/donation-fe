import { BiSolidMoon, BiSolidSun } from "react-icons/bi"

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <div
      className="bg-primary flexBetween relative h-[36px] w-[72px] cursor-pointer rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="flexCenter h-full w-1/2">
        <BiSolidSun />
      </div>
      <div className="flexCenter h-full w-1/2">
        <BiSolidMoon />
      </div>
      <div
        className={`${theme === "light" ? "-right-1 bg-white" : "-left-1 bg-gray-600"} absolute top-0 h-full w-[36px] rounded-full transition-all`}
      />
    </div>
  )
}

export default ThemeToggle
