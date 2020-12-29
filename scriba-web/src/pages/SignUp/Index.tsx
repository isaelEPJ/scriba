import React, { useCallback, useRef } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import logo from '../../assets/images/logo.png';
import { Background, Container, Content } from './styles';
import { Form } from '@unform/web';
import { FiArrowLeft, FiLock, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import * as yup from 'yup';
import useStyles from './styles';

import {
    NameRequiredText,
    EmailRequiredText,
    MinPasswordRequest,
    IncorrectEmailText,
    SignUpButtonText,
} from '../../assets/strings';
import { BackToSigInText, SignUpText } from '../../assets/strings';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

const SignUp: React.FC = () => {
    const FormRef = useRef<FormHandles>(null);
    const classes = useStyles();
    const handleSubmit = useCallback(async (data: object) => {
        try {
            FormRef.current?.setErrors({});

            const schema = yup.object().shape({
                name: yup.string().required(NameRequiredText),
                email: yup
                    .string()
                    .required(EmailRequiredText)
                    .email(IncorrectEmailText),
                password: yup.string().min(6, MinPasswordRequest),
                phone: yup.string().required('telefone de contato obrigatorio'),
                type: yup.string().required('selecione o tipo de Usuario'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            await api.post('/users/create', data);
        } catch (err) {
            const errors = getValidationErrors(err);
            FormRef.current?.setErrors(errors);
        }
    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <img src={logo} alt="logo" />
                <Form ref={FormRef} onSubmit={handleSubmit}>
                    <h1>{SignUpText}</h1>
                    <Input
                        name="name"
                        icon={FiUser}
                        placeholder="Nome de Usuario"
                    />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="phone" icon={FiPhone} placeholder="Fone" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">{SignUpButtonText}</Button>
                </Form>
                <Link to="/">
                    <FiArrowLeft size={20} />
                    {BackToSigInText}
                </Link>
            </Content>
        </Container>
    );
};
export default SignUp;
