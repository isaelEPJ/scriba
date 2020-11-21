import styled, { css } from "styled-components";
import { colors } from "../../assets/colors";
interface InputProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<InputProps>`
    color: ${colors.grey4};
    background: ${colors.grey2};
    border-radius: 20px;
    border: 2px solid ${colors.grey2};
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    & + div {
        margin-top: 8px;
    }
    ${(props) =>
        props.isFocused &&
        css`
            color: ${colors.blue2};
            border-color: ${colors.blue2};
        `}
    ${(props) =>
        props.isFilled &&
        css`
            color: ${colors.blue2};
        `}
    input {
        background: transparent;
        flex: 1;
        border: 0;
        color: ${colors.blue1};
        & ::placeholder {
            color: ${colors.blue1};
        }
        & + input {
            margin-top: 8px;
        }
    }
    > svg {
        margin-right: 16px;
    }
`;
