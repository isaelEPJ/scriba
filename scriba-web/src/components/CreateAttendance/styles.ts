import { shade } from "polished";
import styled from "styled-components";
import { colors } from "../../assets/colors";

export const NewAttendance = styled.div`
    background-color: ${colors.white};
    padding: 70px;
    border-radius: 10px;
    position: absolute; /* posição absoluta ao elemento pai, neste caso o BODY */
    border-radius: 8px;
    margin-top: 15px;
    opacity: 0.9;
    border: 2px solid ${colors.blue2};
    text-align: center;
    z-index: 2000;
    div {
        input {
            border-radius: 10px;
            border: 2px solid ${colors.blue2};
            margin: 4px;
        }
    }
    .formAttCli {
        display: inline-flexbox;
    }
    .inputFormCli {
    }
    .InputContent {
        width: 300px;
        height: 100px;
    }
`;
export const Form = styled.form`
    margin-top: 5px;
    display: flex;
    margin: 5px 0 0 7px;

    input {
        flex: 1;
        height: 2rem;
        width: 3rem;
        max-width: 500px;
        padding: 0 10;
        border: 0;
        border-radius: 8px 0 0 8px;
        border: 2px solid ${colors.blue1};

        &::placeholder {
            color: ${colors.grey3};
        }
    }
    button {
        display: flex;
        width: 2rem;
        height: 2rem;
        background-color: ${colors.green1};
        color: ${colors.blue2};
        border-radius: 0 5px 5px 0;
        border: 0;
        justify-content: center;
        align-items: center;
        &:hover {
            background: ${shade(0.4, colors.green1)};
        }
        & + button {
            width: 4rem;
            background-color: ${colors.blue2};
            color: ${colors.green1};
            margin: 0 7px;
            border-radius: 5px;
            &:hover {
                transform: translateY(-0.3vh);
                background: ${shade(-0.4, colors.blue2)};
            }
        }
    }
`;
