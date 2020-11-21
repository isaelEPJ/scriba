import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { Treemap } from "recharts";

import DailyAttendance from "./DailyAttendance";
import MonthlyAppointments from "./MonthlyAppointments";
import PieChartGraph from "./PieChartGraph";
import { Container } from "./styles";

const Graphics: React.FC = () => {
    const data = [
        { name: "set", uv: 100, pv: 100, amt: 100, value: 100 },
        { name: "out", uv: 140, pv: 140, amt: 140, value: 140 },
        { name: "nov", uv: 120, pv: 120, amt: 120, value: 120 },
        { name: "dez", uv: 161, pv: 161, amt: 161, value: 161 },
    ];
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
            <Container>
                <h2>Gráficos</h2>
                <div className="main">
                    <Paper className="paper">
                        <DailyAttendance />
                    </Paper>
                </div>
                <div className="main">
                    <Paper className="paper">
                        <PieChartGraph />
                    </Paper>
                </div>
                <div className="main">
                    <Paper className="paper">
                        <MonthlyAppointments />
                    </Paper>
                </div>
                <div className="main">
                    <Paper className="paper">
                        <Treemap />
                    </Paper>
                </div>
            </Container>
        </>
    );
};

export default Graphics;
