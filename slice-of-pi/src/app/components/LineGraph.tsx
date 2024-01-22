import { Bar, BarChart, Cell, Label, Legend, Line, LineChart, Pie, PieChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DataPoint } from "../util/types";

interface LineGraphProps {
    data: DataPoint[],
    xAxis?: string,
    yAxis?: string
}

export default function LineGraph(props: LineGraphProps) {

    return (
        <ResponsiveContainer width={400} aspect={2}>
            <LineChart
                width={300}
                height={300}
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="ind" >
                    <Label value={props.xAxis} offset={-5} position="insideBottom" />
                </XAxis>
                <YAxis >
                 <Label value={props.yAxis} angle={-90} position="insideBottomLeft" />
                </YAxis>
                <Tooltip/>
                <Line dataKey="dep" name="count" />
                
            </LineChart>
            
        </ResponsiveContainer>
    );
}