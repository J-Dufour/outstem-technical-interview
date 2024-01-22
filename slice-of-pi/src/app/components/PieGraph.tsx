'use client'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { DataPoint } from "../util/types";

interface PieGraphProps {
    data: DataPoint[],
    semi_circ?: boolean
}

export default function PieGraph({ data, semi_circ = false }: PieGraphProps) {

    return (
        <ResponsiveContainer width="100%" aspect={1}>
        <PieChart width={400} height={400}>
          <Pie data={data} 
            dataKey="dep" 
            nameKey="ind" 
            cx="50%" 
            cy="50%" 
            outerRadius={60} 
            fill="#8884d8" 
            startAngle={semi_circ ? 180: 360}
            endAngle={0}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.colour} />
          ))}
          </Pie>
          <Tooltip/>
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
    );
  }
  