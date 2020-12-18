import styled from 'styled-components/native';
import { colors } from '../../assets/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;
export const Text = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: 24px;
    color: ${colors.green1};
    margin: 14px 0 4px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
    color: ${colors.green1};
    font-size: 16px;
    font-family: 'Roboto-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${colors.grey2};
    border-top-width: 1px;
    border-color: ${colors.grey5};
    padding: 16px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 30px 0 60px 0;
`;
export const CreateAccountButtonText = styled.Text`
    font-family: 'Roboto-Regular';
    color: ${colors.blue2};
    font-size: 18px;
    margin-left: 26px;
`;
