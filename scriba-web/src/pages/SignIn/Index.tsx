import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import logo from '../../assets/images/scriba/logo.png';
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

const SignIn: React.FC = () => {
    function handleSubmit(data: object) {
        console.log(data);
    }
    return (
        <Container>
            <Content>
                <img src={logo} alt="logo" />
                <Form onSubmit={handleSubmit}>
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
                    <Button>{SignInButtonText}</Button>
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
