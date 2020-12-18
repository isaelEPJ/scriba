import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { colors } from '../../assets/colors';

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    background: ${colors.blue2};
    border-radius: 10px;

    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;
export const ButtonText = styled.Text`
    font-family: 'Roboto-Medium';
    color: ${colors.green1};
    font-size: 20px;
`;
