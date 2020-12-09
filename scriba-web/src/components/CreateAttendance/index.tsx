import { Avatar, TextField } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';
import { FiSave } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
import { Button, NewAttendance } from './styles';

interface NewTaskProps {
    StateForm: boolean;
}
const CreateAttendance: React.FC = () => {
    const [closeNewTask, setcloseNewTask] = useState(false);
    const clientes = [{ razao: 'isael.CO' }, { razao: 'clientetesteee' }];
    const TipoAtendimento = [{ tipo: 'Suporte' }, { tipo: 'Programaçao' }];

    const importancia = [
        { flag: 'Alta' },
        { flag: 'Média' },
        { flag: 'Baixa' },
    ];
    return (
        <>
            <NewAttendance>
                <div className="FormNewAtt">
                    <div className="headerAddAttendance">
                        <Avatar>I</Avatar>
                        <VscClose size={20} />
                    </div>

                    <fieldset className="fieldCli">
                        <Autocomplete
                            id="combo-box-demo"
                            options={clientes}
                            getOptionLabel={(option) => option.razao}
                            style={{
                                width: '250px',
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Cliente"
                                    variant="standard"
                                />
                            )}
                        />
                        <Autocomplete
                            id="combo-box-demo"
                            options={importancia}
                            getOptionLabel={(option) => option.flag}
                            style={{
                                width: '200px',
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Importancia"
                                    variant="standard"
                                />
                            )}
                        />
                        <Autocomplete
                            id="combo-box-demo"
                            options={TipoAtendimento}
                            getOptionLabel={(option) => option.tipo}
                            style={{
                                width: '200px',
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Tipo"
                                    variant="standard"
                                />
                            )}
                        />
                        <TextField
                            id="standard"
                            label="Usuario"
                            style={{
                                display: 'flex',
                                width: '200px',
                                left: 0,
                            }}
                        />
                    </fieldset>
                </div>
                <div className="inputFormCli">
                    <TextField
                        id="outlined-basic"
                        required
                        label="Motivo"
                        multiline
                        rowsMax={5}
                        className="InputContent"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        required
                        label="Conclusão"
                        multiline
                        rowsMax={5}
                        className="InputContent"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Observaçao"
                        multiline
                        rowsMax={5}
                        className="InputContent"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Envio Para Cliente"
                        multiline
                        rowsMax={5}
                        className="InputContent"
                        variant="outlined"
                    />
                </div>
                <Button>Salvar</Button>
                <Button>Encaminhar</Button>
                <Button>Finalizar</Button>
            </NewAttendance>
        </>
    );
};

export default CreateAttendance;
