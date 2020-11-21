import React from "react";
import { FiSave } from "react-icons/fi";
import { NewAttendance } from "./styles";

const CreateAttendance: React.FC = () => {
    return (
        <>
            <NewAttendance>
                <form>
                    <div className="formAttCli">
                        <input placeholder="Nome do cliente" />
                        <input placeholder="Nome da Empresa" />
                        <input placeholder="Atendente" />
                    </div>
                    <div className="inputFormCli">
                        <input
                            className="InputContent"
                            placeholder="Atendimento"
                        />
                        <input
                            className="InputContent"
                            placeholder="Descriçao"
                        />
                    </div>
                </form>
                <button>
                    <FiSave size={30} />
                </button>
            </NewAttendance>
        </>
    );
};

export default CreateAttendance;
