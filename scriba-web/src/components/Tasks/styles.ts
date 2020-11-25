import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const Container = styled.div`
    background-color: ${colors.GreyBackground};
    width: 60vh;
    height: 100vh;
    right: 1px;
    position: fixed;
    border:0;
    margin: 2px 1px 0 0;
    padding-bottom: 5rem;
    vertical-align: top;
    overflow-y: scroll;
    @media (max-width: 700px) {
        min-width: 100vh;
        max-width: 50%;
        position: unset;
        display: block;
        .paper {
            max-width: 99%;
        }
        border-radius: 8px;
        border: 2px solid ${colors.blue1};
    }
    @media (max-width: 900px) {
        margin: 5px;
        min-width: 100vh;
        max-width: 100vh;
        max-width: 100%;
        position: unset;
        display: block;
        .paper {
            max-width: 99%;
        }
        border-radius: 8px;
        border: 2px solid ${colors.blue1};
    }
    @media (max-width: 1200px) {
        margin: 5px;
        min-width: 100vh;
        max-width: 100%;
        position: fixed;
        position: unset;
        display: block;
        .paper {
            max-width: 99%;
        }
        border-radius: 8px;
        border: 2px solid ${colors.blue1};
    }
    @media (max-width: 400px) {
        min-width: 100vh;
        max-width: 100vh;
        width: auto;
        position: unset;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: ${colors.grey2};
    }
    ::-webkit-scrollbar-thumb {
        width: 6px;
        background: ${colors.grey2};
    }
    h2 {
        text-align: center;
        margin: 3px 0;
    }
    .main {
        flex-grow: 1;
        display: flex;
        align-content: center;
        justify-content: center;
        margin: 1.5rem 0;
        flex-direction: column;
    }
    .contentGrid {
            max-height: 200px;
            overflow-y: auto;
            margin:0;
            margin-bottom: 4px;
            margin-top: 2px;
            ::-webkit-scrollbar {
                width: 6px;
                background: ${colors.grey3};
            }
        }
        .scrollarea {
            max-height: 200px;
        }
    }
    .paper {
        margin: 5px 2px;
        padding:4px 0 0 3px;
        border-radius: 10px;
        border: 2px solid ${colors.blue2};
        max-height: 200px;
        ::-webkit-scrollbar {
            width: 6px;
            background: ${colors.grey3};
        }
        &:hover {
            transform: translateY(0.3vh);
        }
    }
    .icons {
        display: flex;
        border-radius: 8px;
        padding: 4px;
        height: 30px;
        align-items: center;
        align-content: center;
    }
`;
export const NewTask = styled.div``;
export const Form = styled.form`
    margin-top: 5px;
    display: flex;
    margin: 5px 0 0 7px;
    input {
        flex: 1;
        height: 2rem;
        width: 3rem;
        max-width: 500px;
        padding: 10;
        border: 0;
        border-radius: 7px 0 0 7px;
        border: 2px solid ${colors.blue1};

        &::placeholder {
            color: ${colors.grey3};
        }
    }
    button {
        width: 2rem;
        height: 2rem;
        background-color: ${colors.green1};
        color: ${colors.blue2};
        border-radius: 0 5px 5px 0;
        border: 0;
        &:hover {
            background: ${shade(0.4, colors.green1)};
        }
        & + button {
            width: 3rem;
            background-color: ${colors.blue2};
            color: ${colors.green1};
            margin: 0 7px;
            border-radius: 5px;
            &:hover {
                background: ${shade(-0.4, colors.blue2)};
            }
        }
    }
`;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);
export default useStyles;
