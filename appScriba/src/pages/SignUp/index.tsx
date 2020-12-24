import React, { useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import { BackToSignInButton, BackToSignInText, Container } from './styles';
import logoImage from '../../assets/images/logo.png';
import { Text } from '../SignIn/styles';
import {
    BackToSigInText,
    SignUpButtonText,
    SignUpText,
} from '../../assets/strings';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { colors } from '../../assets/colors';

const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const formRef = useRef<FormHandles>(null);
    const emailRefInput = useRef<TextInput>(null);
    const passwordRefInput = useRef<TextInput>(null);
    const handleSubmit = useCallback((data: Object) => {
        console.log(data);
    }, []);
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
                        <Image source={logoImage} />
                        <Text>{SignUpText}</Text>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Input
                                autoCapitalize="words"
                                returnKeyType="next"
                                name="name"
                                icon="user"
                                placeholder="Coloque aqui seu Nome"
                                onSubmitEditing={() => {
                                    emailRefInput.current?.focus();
                                }}
                            />
                            <Input
                                ref={emailRefInput}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                returnKeyType="next"
                                autoCorrect={false}
                                name="email"
                                icon="mail"
                                placeholder="Coloque aqui seu E-mail"
                                onSubmitEditing={() => {
                                    passwordRefInput.current?.focus();
                                }}
                            />
                            <Input
                                ref={passwordRefInput}
                                secureTextEntry
                                name="password"
                                icon="lock"
                                placeholder="Digite aqui sua senha"
                                onSubmitEditing={() =>
                                    formRef.current?.submitForm()
                                }
                            />
                            <View>
                                <Button
                                    onPress={() =>
                                        formRef.current?.submitForm()
                                    }
                                >
                                    {SignUpButtonText}
                                </Button>
                            </View>
                        </Form>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <BackToSignInButton
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Icon name="arrow-left" size={20} color={colors.green1} />
                <BackToSignInText>{BackToSigInText}</BackToSignInText>
            </BackToSignInButton>
        </>
    );
};

export default SignUp;
