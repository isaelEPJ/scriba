import React from 'react';
import { TextInputProps } from 'react-native';
import { colors } from '../../assets/colors';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}
const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
    return (
        <Container>
            <Icon name={icon} size={20} />
            <TextInput
                keyboardAppearance="dark"
                placeholderTextColor="#333"
                {...rest}
            />
        </Container>
    );
};

export default Input;
