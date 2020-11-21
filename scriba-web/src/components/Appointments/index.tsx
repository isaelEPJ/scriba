import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { FiEdit, FiSearch, FiTrash } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";
import { AiOutlineExclamationCircle, AiOutlineLine } from "react-icons/ai";
import { Container, Form } from "./styles";
import { colors } from "../../assets/colors";
import CreateAttendance from "../CreateAttendance";

const Appointments: React.FC = () => {
    const [isAddSelected, setIsAddSelected] = useState(false);
    function handleClickNewAtt() {
        if (isAddSelected === false) {
            setIsAddSelected(true);
        } else {
            setIsAddSelected(false);
        }
    }
    return (
        <>
            <Container>
                <p>Isael</p>
                <h2>Atendimentos</h2>
                <Form>
                    <input placeholder="pesquisar" />
                    <button type="button">
                        <FiSearch size={20} />
                    </button>
                    <button type="button" onClick={handleClickNewAtt}>
                        <VscAdd size={20} />
                    </button>
                </Form>
                {isAddSelected && <CreateAttendance />}
                <div className="main">
                    <Paper className="paper">
                        <nav className="navPaper">
                            <FiTrash
                                size={20}
                                style={{
                                    marginLeft: "12px",
                                    color: colors.green1,
                                    cursor: "pointer",
                                }}
                            />
                            <FiEdit
                                size={20}
                                style={{
                                    marginLeft: "8px",
                                    margin: "0 5px",
                                    color: colors.green1,
                                    cursor: "pointer",
                                }}
                            />
                            <Typography
                                style={{
                                    margin: "0 7px",
                                    color: colors.green1,
                                }}
                            >
                                ID:99183
                            </Typography>
                            <Typography
                                style={{
                                    margin: "0 7px",
                                    alignContent: "center",
                                    display: "flex",
                                    color: colors.green1,
                                }}
                            >
                                18/11/2020
                                <AiOutlineExclamationCircle
                                    size={11}
                                    style={{
                                        display: "flex",
                                        margin: "0 7px",
                                        color: colors.redError,
                                    }}
                                />
                            </Typography>
                            <Typography
                                style={{
                                    display: "flex",
                                    margin: "0 7px",
                                    color: colors.green1,
                                }}
                            >
                                30/11/2020
                                <AiOutlineExclamationCircle
                                    size={11}
                                    style={{
                                        color: colors.redError,
                                    }}
                                />
                            </Typography>
                            <div className="butonsNavPaper">
                                <button>Encaminhar</button>
                                <button>Finalizar</button>
                                <button>Detalhes</button>
                            </div>
                        </nav>
                        <Grid
                            container
                            wrap="nowrap"
                            spacing={2}
                            className="contentGrid"
                        >
                            <Grid
                                item
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "13px",
                                        color: colors.green1,
                                    }}
                                >
                                    Executor
                                </p>
                                <Avatar>J</Avatar>
                                <p>Joaquim</p>
                                <p>
                                    <AiOutlineLine size={30} />
                                </p>
                                <p>Isael</p>
                                <Avatar>i</Avatar>
                                <p
                                    style={{
                                        fontSize: "13px",
                                        color: colors.green1,
                                    }}
                                >
                                    Autor
                                </p>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography
                                    style={{ font: "500", fontWeight: "bold" }}
                                >
                                    Pedro | Fiat
                                </Typography>
                                <Typography className="scrollarea">
                                    Lorem ipsum laoreet cras bibendum eleifend
                                    ac scelerisque lorem neque nulla interdum
                                    condimentum, est a fermentum placerat mi
                                    etiam platea tortor euismod fusce. conubia
                                    sollicitudin nulla pellentesque elit nam eu
                                    rutrum sodales, consequat sociosqu placerat
                                    tortor ligula nostra vestibulum mauris,
                                    curae himenaeos congue suspendisse cras
                                    nullam dictumst. amet risus vulputate odio
                                    convallis dapibus porta tincidunt sem
                                    pellentesque rutrum potenti morbi porta
                                    primis, amet at risus hendrerit ligula
                                    turpis lacinia tempus urna ligula purus
                                    senectus. himenaeos sem velit maecenas eget
                                    ultricies nullam vulputate dui aliquet diam
                                    ornare, at dapibus turpis viverra ligula
                                    quisque ligula vulputate nisl consectetur,
                                    lectus luctus arcu condimentum laoreet ut
                                    molestie diam vel morbi.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Container>
        </>
    );
};

export default Appointments;
