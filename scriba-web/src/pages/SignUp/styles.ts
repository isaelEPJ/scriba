import styled from "styled-components";
import { colors } from "../../assets/colors";
import { shade } from "polished";
import backgroundImage from "../../assets/images/scriba/mesa_work.jpg";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    place-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 700px;
    form {
        margin: 20px 0;
        width: 320px;
        text-align: center;
        h1 {
            margin-bottom: 20px;
        }

        a {
            color: ${colors.blue1};
            margin-top: 14px;
            display: block;
            text-decoration: none;
            transition: color 0.2s;
            &:hover {
                color: ${shade(0.2, colors.blue1)};
            }
        }
    }
    > a {
        color: ${colors.blue1};
        display: block;
        margin-top: 14px;
        text-decoration: none;
        transition: color 0.2s;
        margin-bottom: 30px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }
        &:hover {
            color: ${shade(0.2, colors.blue1)};
        }
    }
`;
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        markControl: {
            color: colors.blue1,
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            msTransformOrigin: colors.green1,
        },
        formControl: {
            margin: theme.spacing(1),
            display: "flex",
        },

        greenCheck: {
            color: colors.green1,
            // flexGrow: 1,
            // flexDirection: "column",
        },
    })
);
export default useStyles;
