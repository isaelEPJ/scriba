import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { shade } from "polished";
import styled from "styled-components";
import { colors } from "../../assets/colors";
import backgroundImage from "../../assets/images/scriba/collaboration.svg";

export const Container = styled.div`
    background: url(${backgroundImage}) no-repeat bottom;
    width: 100vh;
    min-width: 670px;
    height: 100vh;
    position: absolute;
    border-radius: 10px;
    border: 2px solid ${colors.blue1};
    right: 50vh;
    left: 54vh;
    margin: 2px 5px 0 0;
    padding: 5px;
    vertical-align: top;
    text-align: center;
    overflow-y: scroll;
    @media only screen and (min-device-width: 900px) {
        width: 50vh;
        align-items: center;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: ${colors.grey2};
    }
    //::-webkit-resizer
    //::-webkit-scrollbar-button
    //::-webkit-scrollbar-track
    //::-webkit-scrollbar-track-piece
    ::-webkit-scrollbar-thumb {
        background: ${colors.green1};
    }
    //::-webkit-scrollbar-corner
    h2 {
        text-align: center;
        margin: 3px 0;
        position: flex;
    }
    .main {
        display: flex;
        flex-grow: 1;
        overflow: hidden;
        padding: 2px;
        margin: 20px 0 4px 4px;
        border: ${colors.blue1};
    }
    .paper {
        margin: 1px 2px;
        padding: 0 0 8px 0;
        border-radius: 10px;
        border: 2px solid ${colors.blue2};
        &:hover {
            transform: translateY(0.5vh);
            border: 2px solid ${colors.blue2};
        }
        .navPaper {
            background-color: ${colors.blue2};
            display: flex;
            border-radius: 8px;
            height: 25px;
            align-items: center;
            align-content: center;
            .butonsNavPaper {
                display: flex;

                button {
                    background-color: ${colors.blue2};
                    color: ${colors.green1};
                    border: 0;
                    border-radius: 5px;
                    margin: 1px 5px 1px 7px;
                }
            }
        }
        .contentGrid {
            padding: 3px 2px;
            height: auto;
            max-width: 600px;
        }
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
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // root: {
        //     flexGrow: 1,
        //     overflow: "hidden",
        //     padding: theme.spacing(1, 1),
        //     border: colors.blue1,
        // },
    })
);
export default useStyles;
