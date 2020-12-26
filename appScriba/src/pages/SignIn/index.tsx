import React, { useCallback, useRef } from 'react';
import {
    Container,
    CreateAccountButton,
    ForgotPassword,
    ForgotPasswordText,
    Text,
    CreateAccountButtonText,
} from './styles';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
} from 'react-native';
import logoImg from '../../assets/images/logo.png';
import {
    EmailRequiredText,
    forgotPasswordText,
    IncorrectEmailText,
    MinPasswordRequest,
    SignInButtonText,
    SignInText,
    stringCreateAccountText,
    ErrorLoginMessage,
    ErrorAuthLoginMessage,
} from '../../assets/strings';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../assets/colors';
import * as yup from 'yup';
import getValidationErrors from '../../util/getValidationErrors';

const SignIn: React.FC = () => {
    const navigation = useNavigation();
    const formRef = useRef<FormHandles>(null);
    const passwordRefInput = useRef<TextInput>(null);
    const emailRefInput = useRef<TextInput>(null);

    interface SignInFormData {
        email: string;
        password: string;
    }

    const handleSignIn = useCallback(
        async (data: SignInFormData) => {
            try {
                const schema = yup.object().shape({
                    email: yup
                        .string()
                        .email(IncorrectEmailText)
                        .required(EmailRequiredText),
                    password: yup.string().min(6, MinPasswordRequest),
                });
                await schema.validate(data, { abortEarly: false });
            } catch (err) {
                if (err instanceof yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                    return;
                }
                Alert.alert(ErrorAuthLoginMessage, ErrorLoginMessage);
            }
        },
        [SignIn, Alert],
    );
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Text>{SignInText}</Text>
                        </View>
                        <Form
                            ref={formRef}
                            onSubmit={handleSignIn}
                            style={{ margin: 0 }}
                        >
                            <Input
                                ref={emailRefInput}
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                name="email"
                                icon="mail"
                                placeholder="Email"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    passwordRefInput.current?.focus();
                                }}
                            />
                            <Input
                                ref={passwordRefInput}
                                secureTextEntry
                                name="password"
                                icon="lock"
                                placeholder="Senha"
                                returnKeyType="send"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm();
                                }}
                            />
                            <View>
                                <Button
                                    onPress={() => {
                                        formRef.current?.submitForm();
                                    }}
                                >
                                    {SignInButtonText}
                                </Button>
                            </View>
                        </Form>

                        <ForgotPassword
                            onPress={() => {
                                console.log('esqueci minha senha');
                            }}
                        >
                            <ForgotPasswordText>
                                {forgotPasswordText}
                            </ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreateAccountButton
                onPress={() => {
                    navigation.navigate('SignUp');
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
