import { CenterFocusStrong, CenterFocusWeak } from "@material-ui/icons";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, BarChart, Tooltip } from "recharts";
import { colors } from "../../assets/colors";

const dataUsers = [
    { name: "Isael", uv: 20, pv: 20, amt: 20, value: 20 },
    { name: "Rodrigo", uv: 21, pv: 21, amt: 21, value: 21 },
    { name: "Bruno", uv: 18, pv: 18, amt: 18, value: 18 },
    { name: "Joao", uv: 6, pv: 6, amt: 6, value: 6 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const PieChartGraph = () => {
    return (
        <>
            <PieChart
                width={500}
                height={400}
                style={{ right: 0, position: "absolute" }}
            >
                <Pie
                    data={dataUsers}
                    alignmentBaseline={CenterFocusStrong}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {dataUsers.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </>
    );
};

export default PieChartGraph;
