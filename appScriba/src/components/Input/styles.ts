import styled, { css } from 'styled-components/native';
import { colors } from '../../assets/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface containerProps {
    isFocused: boolean;
    isErrored: boolean;
}
export const Container = styled.View<containerProps>`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background-color: ${colors.grey2};
    border-radius: 10px;
    border-width: 2px;
    border-color: ${colors.grey2};
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    ${(props) =>
        props.isErrored &&
        css`
            border-color: ${colors.redError};
        `}
    ${(props) =>
        props.isFocused &&
        css`
            border-color: ${colors.green1};
        `}
`;
export const TextInput = styled.TextInput`
    flex: 1;
    color: ${colors.blue2};
    font-size: 16px;
    font-family: 'Roboto-Regular';
`;
export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`;
