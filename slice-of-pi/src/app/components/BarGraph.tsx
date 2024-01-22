import { Bar, BarChart, Cell, Label, Legend, Pie, PieChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DataPoint } from "../util/types";

interface BarGraphProps {
    data: DataPoint[],
    xAxis?: string,
    yAxis?: string
}

export default function BarGraph(props: BarGraphProps) {

    return (
        <ResponsiveContainer width={600} aspect={3}>
            <BarChart
                width={300}
                height={300}
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barCategoryGap="15%"
            >
                <XAxis dataKey="ind" >
                    <Label value={props.xAxis} offset={-5} position="insideBottom" />
                </XAxis>
                <YAxis >
                 <Label value={props.yAxis} angle={-90} position="insideBottomLeft" />
                </YAxis>
                <Tooltip/>
                <Bar dataKey="dep" name="count" fill="#0050db" activeBar={<Rectangle fill="#008bdb"/>}/>
                
            </BarChart>
            
        </ResponsiveContainer>
    );
}
