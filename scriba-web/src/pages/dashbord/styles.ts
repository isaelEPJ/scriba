import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { shade } from "polished";
import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Container = styled.div`
    background-color: ${colors.grey2};
    width: 100vh;
    height: 100vh;
    display: flex;
    border-spacing: 0px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    overflow: hidden;
    position: static;
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
        border-radius: 5px 0 0 5px;
        border: 2px solid ${colors.blue1};
        &::placeholder {
            color: ${colors.grey3};
        }
    }

    button {
        width: 2rem;
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
        root: {
            flexGrow: 1,
            overflow: "hidden",
            padding: theme.spacing(1, 1),
            border: colors.blue1,
        },
        paper: {
            // maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
            borderRadius: "14px",
            border: `2px solid ${colors.blue1}`,
        },
        icons: {
            display: "block",
            // marginLeft: "-100px",
            // marginTop: "-100px",
            // top: "50%",
            // left: "50%",
        },
    })
);
export default useStyles;
