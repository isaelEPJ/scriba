import { shade } from "polished";
import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Container = styled.button`
    background: ${colors.green1};
    color: ${colors.blue1};
    border-radius: 20px;
    height: 56px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    font-weight: 600;
    margin-top: 16px;
    transition: background-color 0.2s;
    &:hover {
        background: ${shade(0.2, colors.green1)};
    }
`;
