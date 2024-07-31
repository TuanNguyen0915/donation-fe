import img1 from "../../assets/donation-1.jpeg"
import img2 from "../../assets/donation-2.jpeg"
import img3 from "../../assets/donation-3.jpeg"
import TableItem from "./TableItem"

const dataTable = [
  {
    title: "Why sponsor with World's Children?",
    content1:
      "World’s Children assists the most desperate children—orphans, abused or abandoned children, and children with HIV/AIDS. Many are girls from poor families who are not loved or wanted.",
    borderTop: "border-[#00C49F]",
    img: img1,
    bgColor: "bg-[#00C49F]",
  },
  {
    title: "How is my sponsorship donation used?",
    content1:
      "The children’s homes are like large families. As with any family, it is important that all the children feel loved and nurtured equally.",
    borderTop: "border-[#f7b400]",
    img: img2,
    bgColor: "bg-[#f7b400]",
  },
  {
    title: "What is my relationship with my sponsored child?",
    content1:
      "Throughout the year you will receive a minimum of one photo, one letter, a drawing and detailed progress report from your sponsored child.",
    borderTop: "border-[#0088FE]",
    img: img3,
    bgColor: "bg-[#0088FE]",
  },
]
const MissionTable = () => {
  return (
    <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {dataTable.map((data, idx) => (
        <TableItem data={data} key={idx} />
      ))}
    </div>
  )
}

export default MissionTable
