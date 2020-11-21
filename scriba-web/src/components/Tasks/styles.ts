import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { shade } from "polished";
import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Container = styled.div`
    background-color: ${colors.grey2};
    width: 50vh;
    height: 100vh;
    position: absolute;
    right: 0;
    border-radius: 10px;
    border: 2px solid ${colors.blue1};
    margin: 2px 1px 0 0;
    padding: 6px;
    vertical-align: top;
    /* overflow-y: scroll; */
    h2 {
        text-align: center;
        margin: 3px 0;
    }
    .main {
        flex-grow: 1;
        overflow: "hidden";
        padding: 3px;
        border: ${colors.blue1};
    }
    .paper {
        margin: 1rem auto;
        padding: 6px 3px;
        border-radius: 10px;
        border: 2px solid ${colors.blue2};
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
export const TaskGrid = styled.div``;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionDesktop: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex",
            },
        },
        sectionMobile: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
    })
);
export default useStyles;
