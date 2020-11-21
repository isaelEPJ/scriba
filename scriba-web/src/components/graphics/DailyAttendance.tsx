import { Grid, Paper } from "@material-ui/core";
import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { colors } from "../../assets/colors";

const DailyAttendance: React.FC = () => {
    const dataUsers = [
        { name: "Isael", uv: 20, pv: 20, amt: 20, value: 20 },
        { name: "Rodrigo", uv: 21, pv: 21, amt: 21, value: 21 },
        { name: "Bruno", uv: 18, pv: 18, amt: 18, value: 18 },
        { name: "Joao", uv: 6, pv: 6, amt: 6, value: 6 },
    ];

    const getIntroOfPage = (label: any) => {
        if (label === "Page A") {
            return "Page A is about men's clothing";
        }
        if (label === "Page B") {
            return "Page B is about women's dress";
        }
        if (label === "Page C") {
            return "Page C is about women's bag";
        }
        if (label === "Page D") {
            return "Page D is about household goods";
        }
        if (label === "Page E") {
            return "Page E is about food";
        }
        if (label === "Page F") {
            return "Page F is about baby food";
        }
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}`}</p>
                    <p className="intro">{getIntroOfPage(label)}</p>
                    <p className="desc">Descriçao de atendimentos Diarios</p>
                </div>
            );
        }

        return null;
    };
    return (
        <>
            <BarChart width={500} height={400} data={dataUsers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                    dataKey="pv"
                    name="Atendimentos Diários"
                    barSize={20}
                    fill={colors.green1}
                />
            </BarChart>
        </>
    );
};

export default DailyAttendance;
