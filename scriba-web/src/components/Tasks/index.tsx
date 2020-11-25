import { Avatar, Grid, Input, Paper, Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { FiEdit, FiSave, FiSearch, FiTrash } from 'react-icons/fi';
import { VscNewFile } from 'react-icons/vsc';
import { NotificationText } from '../../assets/strings';
import useStyles, { Container, Form, NewTask } from './styles';

const Tasks: React.FC = () => {
    const classes = useStyles();

    const [isAddTask, setIsAddTask] = useState(false);
    function handleAddTask() {
        if (isAddTask == false) {
            setIsAddTask(true);
        } else {
            setIsAddTask(false);
        }
    }
    return (
        <>
            <Container>
                <h2>{NotificationText}</h2>
                <Form>
                    <input placeholder="pesquisar" />
                    <button type="button">
                        <FiSearch size={20} />
                    </button>
                    <button type="button" onClick={handleAddTask}>
                        <VscNewFile size={20} />
                    </button>
                </Form>
                {isAddTask && (
                    <NewTask>
                        <form>
                            <input placeholder="handle tasks" />
                        </form>
                    </NewTask>
                )}

                <div className="main">
                    <Paper className="paper">
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <div className="icons">
                                    <FiTrash size={20} />
                                    <FiEdit size={20} />
                                </div>
                                <Avatar>W</Avatar>
                                <p>owner</p>
                            </Grid>
                            <Grid item xs zeroMinWidth className="contentGrid">
                                <Typography
                                    style={{ font: '500', fontWeight: 'bold' }}
                                >
                                    Controle de qualidade
                                </Typography>
                                <Typography className="scrollText">
                                    AS MELHORES INFORMAÇÕES SOBRE AÇÕES PARA
                                    ORIENTAR SEUS INVESTIMENTOSAS MELHORES
                                    INFORMAÇÕES SOBRE AÇÕES PARA ORIENTAR SEUS
                                    INVESTIMENTOS AS MELHORES INFORMAÇÕES SOBRE
                                    AÇÕES PARA ORIENTAR SEUS INVESTIMENTOSAS
                                    MELHORES INFORMAÇÕES SOBRE AÇÕES PARA
                                    ORIENTAR SEUS INVESTIMENTOS AS MELHORES
                                    INFORMAÇÕES SOBRE AÇÕES PARA ORIENTAR SEUS
                                    INVESTIMENTOSAS MELHORES INFORMAÇÕES SOBRE
                                    AÇÕES PARA ORIENTAR SEUS INVESTIMENTOS AS
                                    MELHORES INFORMAÇÕES SOBRE AÇÕES PARA
                                    ORIENTAR SEUS INVESTIMENTOSAS MELHORES
                                    INFORMAÇÕES SOBRE AÇÕES PARA ORIENTAR SEUS
                                    INVESTIMENTOS AS MELHORES INFORMAÇÕES SOBRE
                                    AÇÕES PARA ORIENTAR SEUS INVESTIMENTOSAS
                                    MELHORES INFORMAÇÕES SOBRE AÇÕES PARA
                                    ORIENTAR SEUS INVESTIMENTOS AS MELHORES
                                    INFORMAÇÕES SOBRE AÇÕES PARA ORIENTAR SEUS
                                    INVESTIMENTOSAS MELHORES INFORMAÇÕES SOBRE
                                    AÇÕES PARA ORIENTAR SEUS INVESTIMENTOS
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Container>
        </>
    );
};

export default Tasks;
