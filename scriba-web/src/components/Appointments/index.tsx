import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { FiEdit, FiSearch, FiTrash } from 'react-icons/fi';
import { VscAdd } from 'react-icons/vsc';
import { AiOutlineExclamationCircle, AiOutlineLine } from 'react-icons/ai';
import { Container, Form } from './styles';
import { colors } from '../../assets/colors';
import CreateAttendance from '../CreateAttendance';
import NavPaper from '../navPaper';
import { AttendanceText } from '../../assets/strings';

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
            <Container isAddSelected={isAddSelected}>
                <p>Isael</p>
                <h2>{AttendanceText}</h2>
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
                        <NavPaper />
                        <Grid
                            container
                            wrap="nowrap"
                            spacing={2}
                            className="contentGrid"
                        >
                            <Grid
                                item
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: '13px',
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
                                        fontSize: '13px',
                                        color: colors.green1,
                                    }}
                                >
                                    Autor
                                </p>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography
                                    style={{ font: '500', fontWeight: 'bold' }}
                                >
                                    Pedro | Fiat
                                </Typography>
                                <Typography className="scrollarea">
                                    É um fato conhecido de todos que um leitor
                                    se distrairá com o conteúdo de texto legível
                                    se distrairá com o conteúdo de texto legível
                                    de uma página quando estiver examinando sua
                                    diagramação. A vantagem de usar Lorem Ipsum
                                    é que ele tem uma distribuição normal de
                                    letras, ao contrário de "Conteúdo aqui,
                                    conteúdo aqui", fazendo com que ele tenha
                                    uma aparência similar a de um texto legível.
                                    Muitos softwares de publicação e editores de
                                    páginas na internet agora usam Lorem Ipsum
                                    como texto-modelo padrão, e uma rápida busca
                                    por 'lorem ipsum' mouma página quando
                                    estiver examinando sua diagramação. A
                                    vantagem de usar Lorem Ipsum é que ele tem
                                    uma distribuição normal de letras, ao
                                    contrário de "Conteúdo aqui, conteúdo aqui",
                                    fazendo com que ele tenha uma aparência
                                    similar a de um texto legível. Muitos
                                    softwares de publicação e editores de
                                    páginas na internet agora usam Lorem Ipsum
                                    como texto-modelo padrão, e uma rápida busca
                                    por 'lorem ipsum' mouma página quando
                                    estiver examinando sua diagramação. A
                                    vantagem de usar Lorem Ipsum é que ele tem
                                    uma distribuição normal de letras, ao
                                    contrário de "Conteúdo aqui, conteúdo aqui",
                                    fazendo com que ele tenha uma aparência
                                    similar a de um texto legível. Muitos
                                    softwares de publicação e editores de
                                    páginas na internet agora usam Lorem Ipsum
                                    como texto-modelo padrão, e uma rápida busca
                                    por 'lorem ipsum' mostra vários websites
                                    ainda em sua fase de construção. Várias
                                    versões novas surgiram ao longo dos anos,
                                    eventualmente por acidente, e às vezes de
                                    propósito (injetando humor, e coisas do
                                    gênero).
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
