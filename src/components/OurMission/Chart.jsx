import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Program support", value: 900 },
  { name: "Administration", value: 45 },
  { name: "Fundraising", value: 55 },
]

const COLORS = ["#f7b400", "#0088FE", "#00C49F"]
const Chart = () => {
  return (
    
      <ResponsiveContainer className="ml-20 h-full w-full">
        <PieChart width={800} height={400} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
            paddingAngle={10}
            dataKey="value"
            nameKey={"name"}
            label={({ name, value }) => `${name}: ${(value / 1000) * 100}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    
  )
}

export default Chart
