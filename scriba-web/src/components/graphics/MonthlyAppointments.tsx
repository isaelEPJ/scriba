import { Grid, Paper } from "@material-ui/core";
import React from "react";
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { colors } from "../../assets/colors";

const MonthlyAppointments: React.FC = () => {
    const data = [
        { name: "set", uv: 100, pv: 100, amt: 100, value: 100 },
        { name: "out", uv: 140, pv: 140, amt: 140, value: 140 },
        { name: "nov", uv: 120, pv: 120, amt: 120, value: 120 },
        { name: "dez", uv: 161, pv: 161, amt: 161, value: 161 },
    ];
    return (
        <>
            <ComposedChart width={500} height={400} data={data}>
                <CartesianGrid stroke={colors.white} />
                <XAxis
                    dataKey="name"
                    label={{
                        value: "Meses",
                        position: "centerBottom",
                        offset: 0,
                    }}
                />
                <YAxis
                    label={{
                        value: "Atendimentos",
                        angle: -90,
                        position: "insideBottom",
                    }}
                />
                <Tooltip />
                <Legend />
                <Area
                    type="monotone"
                    dataKey="amt"
                    fill="#8884d8"
                    stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </>
    );
};

export default MonthlyAppointments;
