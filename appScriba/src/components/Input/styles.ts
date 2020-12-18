import styled from 'styled-components/native';
import { colors } from '../../assets/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background-color: ${colors.grey2};
    border-radius: 10px;
    margin-bottom: 8px;

    flex-direction: row;
    align-items: center;
`;
export const TextInput = styled.TextInput`
    flex: 1;
    color: ${colors.blue2};
    font-size: 16px;
    font-family: 'Roboto-Regular';
`;
export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
    color: ${colors.green1};
`;
