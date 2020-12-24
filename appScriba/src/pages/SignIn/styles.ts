import styled from 'styled-components/native';
import { colors } from '../../assets/colors';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 200 : 40}px;
`;
export const Text = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: 24px;
    color: ${colors.green1};
    margin: 25px 0 25px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
    color: ${colors.darkInput};
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
    padding: 16px 0 ${16 + getBottomSpace()}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 5px 0 2px 0;
`;
export const CreateAccountButtonText = styled.Text`
    font-family: 'Roboto-Regular';
    color: ${colors.green1};
    font-size: 18px;
    margin-left: 26px;
`;
