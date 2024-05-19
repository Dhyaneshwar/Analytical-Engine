import React from 'react'
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import chroma from 'chroma-js'

function CustomPieChart({ dataCount }) {
  const generateColors = (numColors) => {
    return chroma.scale(['#fafa6e', '#096979']).mode('lch').colors(numColors)
  }

  const colors = generateColors(dataCount.length)

  return (
    <ResponsiveContainer width="100%" height="90%">
      <PieChart>
        <Pie dataKey="count" data={dataCount} label>
          {dataCount.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />

        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default CustomPieChart
