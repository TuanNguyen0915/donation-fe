import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"

import { Toaster } from "react-hot-toast"
import FundCounter from "./components/FundCounter/FundCounter"
import OurMission from "./components/OurMission/OurMission"
import OurVideo from "./components/OurVideo/OurVideo"
import OurTeam from "./components/OurTeam/OurTeam"
import LatestBlog from "./components/LatestBlog/LatestBlog"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-800">
      <div>
        <Toaster />
      </div>
      <Navbar />
      <Hero />
      <FundCounter />
      <OurMission />
      <OurVideo />
      <OurTeam />
      <LatestBlog />
      <Footer />
    </main>
  )
}

export default App
