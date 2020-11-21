import { shade } from "polished";
import styled from "styled-components";
import { colors } from "../../assets/colors";
import backgroundGraphics from "../../assets/images/scriba/graphicsBackground.svg";

export const Container = styled.div`
    background-color: ${colors.grey2};
    border-radius: 10px;
    margin: 5px;
    /* overflow-y: scroll; */
    /* .menu { width:100%; } */

    ::-webkit-scrollbar {
        width: 6px;
        background: ${colors.grey2};
    }
    //::-webkit-resizer
    //::-webkit-scrollbar-button
    //::-webkit-scrollbar-track
    //::-webkit-scrollbar-track-piece
    ::-webkit-scrollbar-thumb {
        background: ${colors.grey5};
    }
    h2 {
        text-align: center;
        margin: 3px 0;
    }
    .main {
        flex-grow: 1;
        border: ${colors.blue1};
        text-decoration: none;
    }
    .paper {
        background-color: ${colors.grey2};
        margin: 1rem 1rem;
        padding: 4px 3px;
        border: 0;
        transition: color 1s;

        &:hover {
            background-color: ${shade(0.1, colors.grey2)};
        }
        .graphItem {
            display: flex;
            margin: 0;
            border: 0;
        }
    }

`;
