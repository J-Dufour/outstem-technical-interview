import { Bar, BarChart, Cell, Legend, Pie, PieChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DataPoint } from "../util/types";

interface BarGraphProps {
    data: DataPoint[],
}

export default function BarGraph({ data }: BarGraphProps) {

    return (
        <ResponsiveContainer width={600} aspect={3}>
            <BarChart
                width={300}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barCategoryGap="15%"
            >
                <XAxis dataKey="ind" />
                <YAxis />
                <Tooltip/>
                <Bar dataKey="dep" name="count" fill="#0050db" activeBar={<Rectangle fill="#008bdb"/>}/>
                
            </BarChart>
            
        </ResponsiveContainer>
    );
}
