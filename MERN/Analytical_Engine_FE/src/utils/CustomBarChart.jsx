import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function CustomBarChart({
  dataCount,
  angle = -25,
  textAnchor = 'end',
  labelHeight = 45,
}) {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        data={dataCount}
        margin={{
          top: 25,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#71f5de" stopOpacity={0.8} />
            <stop offset="98%" stopColor="#71f5de" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#48494e" />
        <XAxis
          dataKey="name"
          angle={angle}
          textAnchor={textAnchor}
          axisLine={false}
          tickLine={false}
          interval={0}
          height={labelHeight}
        />
        <YAxis axisLine={false} tickLine={false} style={{ fontSize: '10px' }} />
        <Tooltip />
        <Bar
          dataKey="count"
          fill="url(#colorGradient)"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CustomBarChart
