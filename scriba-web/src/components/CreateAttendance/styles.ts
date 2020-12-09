import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const NewAttendance = styled.form`
    background-color: ${colors.white};
    border: 2px solid ${colors.blue2};
    border-radius: 10px;
    opacity: 0.9;
    margin-top: 10px;
    z-index: 2000;
    div {
        svg {
            color: red;
        }
    }
    .FormNewAtt {
        /* display: flex; */
        padding: 8px;
        border: 8px;
    }
    .fieldCli {
        padding: 0 20px 8px 10px;
        border-radius: 8px;
        width: 60%;
        margin: 5px;
    }
    .headerAddAttendance {
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        svg {
            cursor: pointer;
        }
    }
    .inputFormCli {
        display: grid;
        grid-template-columns: auto auto;
    }
    .InputContent {
        display: flex;
        margin: 0 0 0 13px;
        width: 90%;
        min-height: 60px;
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
export const Button = styled.button`
    background: ${colors.green1};
    color: ${colors.blue2};
    border-radius: 6px;
    height: auto;
    border: 1px solid ${colors.blue2};
    margin: 0 1rem 3px 0;
    padding: 0 16px;
    width: auto;
    font-weight: 500;
    margin-top: 2rem;
    transition: background-color 0.2s;
    &:hover {
        background: ${shade(0.2, colors.green1)};
    }
`;
