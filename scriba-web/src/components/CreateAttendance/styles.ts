import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const NewAttendance = styled.form`
    background-color: ${colors.white};
    border-radius: 10px;
    height: 600px;
    position: fixed; /* posição absoluta ao elemento pai, neste caso o BODY */
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
    .inputCli {
        display: grid;
        grid-template-columns: auto auto;
    }
    .formAttCli {
        height: 80px;
        display: grid;
        grid-template-columns: auto auto;
    }
    .inputFormCli {
        display: inline-block;
    }
    .InputContent {
        width: 18rem;
        height: 18rem;
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
