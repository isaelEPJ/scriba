import { Avatar, Modal } from '@material-ui/core';
import React from 'react';
import { FiSave } from 'react-icons/fi';
import { NewAttendance } from './styles';

const CreateAttendance: React.FC = () => {
    return (
        <>
            <NewAttendance>
                <div className="formAttCli">
                    <div className="InputCli">
                        <input placeholder="Nome do cliente" />
                        <input placeholder="Nome da Empresa" />
                        <input placeholder="Atendente" />
                    </div>
                    <Avatar>I</Avatar>
                </div>
                <div className="inputFormCli">
                    <input className="InputContent" placeholder="Problema" />
                    <input className="InputContent" placeholder="Resoluçao" />
                    <input
                        className="InputContent"
                        placeholder="Email para cliente"
                    />
                </div>
                <button>
                    <FiSave size={30} />
                </button>
            </NewAttendance>
        </>
    );
};

export default CreateAttendance;
