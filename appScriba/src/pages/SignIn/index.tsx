import React from 'react';
import {
    Container,
    CreateAccountButton,
    ForgotPassword,
    ForgotPasswordText,
    Text,
    CreateAccountButtonText,
} from './styles';
import { Image } from 'react-native';
import logoImg from '../../assets/images/logo.png';
import {
    forgotPasswordText,
    SignInButtonText,
    SignInText,
    stringCreateAccountText,
} from '../../assets/strings';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../assets/colors';

const SignIn: React.FC = () => {
    return (
        <>
            <Container>
                <Image source={logoImg} />
                <Text>{SignInText}</Text>
                <Input name="Email" icon="mail" placeholder="Email" />
                <Input name="password" icon="lock" placeholder="Senha" />
                <Button
                    onPress={() => {
                        console.log('entrou');
                    }}
                >
                    {SignInButtonText}
                </Button>
                <ForgotPassword
                    onPress={() => {
                        console.log('dsdsd');
                    }}
                >
                    <ForgotPasswordText>
                        {forgotPasswordText}
                    </ForgotPasswordText>
                </ForgotPassword>
            </Container>
            <CreateAccountButton
                onPress={() => {
                    console.log('dwssd');
                }}
            >
                <Icon name="log-in" size={20} color={colors.green1} />
                <CreateAccountButtonText>
                    {stringCreateAccountText}
                </CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
};
export default SignIn;
