import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { colors } from '../../assets/colors';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 25px ${Platform.OS === 'android' ? 250 : 40}px;
`;
export const BackToSignInButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: auto;
    background: ${colors.grey2};
    border-top-width: 1px;
    border-color: ${colors.grey5};
    padding: 16px 0 ${16 + getBottomSpace()}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 5px 0 2px 0;
`;
export const BackToSignInText = styled.Text`
    color: ${colors.green1};
    font-size: 16px;
    margin-left: 10px;
`;
