import React from "react";
import Appointments from "../../components/Appointments";
import Tasks from "../../components/Tasks";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
    return (
            <Container>
                <Appointments />
                <Tasks />
            </Container>
    );
};
export default Dashboard;
