import React, { useCallback, useContext, useRef } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import logo from '../../assets/images/logo.png';
import { Background, Container, Content } from './styles';
import {
    CreateAccountText,
    forgotPasswordText,
    SignInButtonText,
    SignInText,
} from '../../assets/strings';
import { Link } from 'react-router-dom';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { AuthContext } from '../../context/AuthContext';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

const SignIn: React.FC = () => {
    const FormRef = useRef<FormHandles>(null);
    const { SignIn } = useContext(AuthContext);

    const handleSubmit = useCallback(
        async (data: Object) => {
            try {
                FormRef.current?.setErrors({});
                const schemas = yup.object().shape({
                    email: yup
                        .string()
                        .required('O email é obrigatorio')
                        .email('o campo que voce preencheu deve ser um Email'),
                    password: yup
                        .string()
                        .min(3, 'Tem que ter o minimo de 3 caracteres'),
                });
                await schemas.validate(data, {
                    abortEarly: false,
                });
                SignIn();
            } catch (err) {
                const errors = getValidationErrors(err);
                FormRef.current?.setErrors(errors);
            }
        },
        [SignIn],
    );
    return (
        <Container>
            <Content>
                <img src={logo} alt="logo" />
                <Form onSubmit={handleSubmit} ref={FormRef}>
                    <h1>{SignInText}</h1>
                    <Input
                        name="email"
                        icon={FiMail}
                        placeholder="Usuario/Email"
                    />
                    <Input
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">{SignInButtonText}</Button>
                    <a href="#">{forgotPasswordText}</a>
                </Form>
                <Link to="/cadastro">
                    <FiLogIn size={20} />
                    {CreateAccountText}
                </Link>
            </Content>
            <Background />
        </Container>
    );
};
export default SignIn;
