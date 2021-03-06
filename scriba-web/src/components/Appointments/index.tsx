import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsFilterRight } from 'react-icons/bs';
import { VscAdd } from 'react-icons/vsc';
import { AiOutlineLine } from 'react-icons/ai';
import { Container, Form } from './styles';
import { colors } from '../../assets/colors';
import CreateAttendance from '../CreateAttendance';
import NavPaper from '../navPaper';
import { AttendanceText } from '../../assets/strings';

const Appointments: React.FC = () => {
    const [isAddSelected, setIsAddSelected] = useState(false);
    const [StateForm, setStateForm] = useState(true);

    function handleClickNewAtt() {
        if (isAddSelected === false) {
            setIsAddSelected(true);
            // setStateForm(false);
        } else {
            setIsAddSelected(false);
            setStateForm(true);
        }
    }

    return (
        <>
            <Container isAddSelected={isAddSelected}>
                <p>Isael</p>
                <h2>{AttendanceText}</h2>
                {StateForm && (
                    <Form>
                        <BsFilterRight size={40} />
                        <input placeholder="pesquisar" />
                        <button type="button">
                            <FiSearch size={20} />
                        </button>
                        <button type="button" onClick={handleClickNewAtt}>
                            <VscAdd size={20} />
                        </button>
                    </Form>
                )}
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
                                    alignItems: 'center',
                                    justifyContent: 'center',
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
                            <Grid>
                                <Typography
                                    style={{
                                        font: '500',
                                        fontWeight: 'bold',
                                        margin: '-6px 0 0 2px',
                                    }}
                                >
                                    Pedro | Fiat
                                </Typography>
                                <Typography className="contentGrid">
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
