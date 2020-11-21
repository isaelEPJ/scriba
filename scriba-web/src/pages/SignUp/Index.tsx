import React, { useCallback, useRef, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import logo from "../../assets/images/scriba/logo.png";
import { Background, Container, Content } from "./styles";
import { Form } from "@unform/web";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import * as yup from "yup";
import useStyles from "./styles";

import {
    NameRequiredText,
    EmailRequiredText,
    MinPasswordRequest,
    IncorrectEmailText,
    SignUpButtonText,
    GroupedSelectedText,
} from "../../assets/strings";
import { BackToSigInText, SignUpText } from "../../assets/strings";
import { Link } from "react-router-dom";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../utils/getValidationErrors";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    Select,
} from "@material-ui/core";

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
                type: yup.string().required("selecione o tipo de Usuario"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
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
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <div className={classes.markControl}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    className={classes.greenCheck}
                                    // checked={state.checkedB}
                                    // onChange={handleSubmit}
                                    name="checkedB"
                                />
                            }
                            label="Administrador"
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="grouped-native-select">
                                {GroupedSelectedText}
                            </InputLabel>
                            <Select
                                color="primary"
                                native
                                defaultValue=""
                                id="grouped-native-select"
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>Suporte Técninco</option>
                                <option value={2}>Programaçao</option>
                                <option value={3}>Certificaçao digital</option>
                                <option value={4}>Administrativo</option>
                            </Select>
                        </FormControl>
                    </div>
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
