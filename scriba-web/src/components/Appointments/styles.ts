import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { shade, textInputs } from 'polished';
import styled, { css } from 'styled-components';
import { colors } from '../../assets/colors';
import backgroundImage from '../../assets/images/scriba/collaboration.svg';

interface ContainerProps {
    isAddSelected: boolean;
}
export const Container = styled.div<ContainerProps>`
    background: url(${backgroundImage}) no-repeat bottom;
    width: 135.5vh;
    height: 100vh;
    flex-grow: 1;
    border: 0;
    max-width: 90%;
    margin: 1rem 0 10rem 1rem;
    padding-bottom: 5rem;
    position: fixed;
    text-align: center;
    overflow-y: scroll;
    ${(props) =>
        props.isAddSelected &&
        css`
            opacity: 1;
        `}
    ::-webkit-scrollbar {
        width: 6px;
        background: ${colors.grey2};
    }
    ::-webkit-scrollbar-thumb {
        width: 10px;
        background: ${colors.grey2};
    }
    //::-webkit-scrollbar-corner
    @media (max-width: 700px) {
        margin: 5px 0;
        bottom: 2rem;
        min-width: 100vh;
        max-width: 100vh;
        position: unset;
        display: block;
        .paper {
            max-width: 99%;
        }
        border-radius: 8px;
        border: 2px solid ${colors.blue1};
    }
    @media (max-width: 900px) {
        margin: 5px 0;
        min-width: 100vh;
        max-width: 100vh;
        max-width: 85%;
        position: unset;
        display: block;
        .paper {
            max-width: 99%;
        }
        border-radius: 8px;
        border: 2px solid ${colors.blue1};
    }
    @media (max-width: 1200px) {
        margin: 5px 0;
        border: 1rem;
        min-width: 100vh;
        max-width: 100vh;
        max-width: 100%;
        position: unset;

        .paper {
            max-width: 99%;
            overflow: hidden;
        }
        border-radius: 8px;
        border: 2px solid ${colors.blue1};
    }

    h2 {
        text-align: center;
        margin: 3px 0;
        position: flex;
    }
    .main {
        flex-grow: 1;
        display: flex;
        align-content: center;
        justify-content: center;
        margin: 2rem 0.5rem;
        flex-direction: column;
    }
    .paper {
        margin: 5px 2px;
        border-radius: 10px;
        border: 2px solid ${colors.blue2};
        max-height: 600px;

        &:hover {
            transform: translateY(0.5vh);
            border: 2px solid ${colors.blue2};
        }

        .contentGrid {
            padding: 9px;
            max-height: 300px;
            overflow-y: scroll;
            margin-bottom: 4px;
            margin-top: 2px;
            max-height: 200px;

            ::-webkit-scrollbar {
                width: 6px;
                background: ${colors.GreyBackground};
            }
        }
        .scrollarea {
        }
    }
`;
export const Form = styled.form`
    margin-top: 5px;
    display: flex;
    margin: 5px 0 0 7px;
    align-content: center;
    justify-content: center;
    > svg {
        cursor: pointer;
        margin-right: 0.7rem;
        color: ${colors.blue2};
    }
    input {
        flex: 1;
        height: 2.5rem;
        width: 4rem;
        max-width: 560px;
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
        height: 2.5rem;
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
