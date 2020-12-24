import { useField } from '@unform/core';
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { TextInputProps } from 'react-native';
import { colors } from '../../assets/colors';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}
interface InputRef {
    focus(): void;
}
interface inputValueRefference {
    value: string;
}
const Input: React.RefForwardingComponent<InputRef, InputProps> = (
    { name, icon, ...rest },
    ref,
) => {
    const inputElementRef = useRef<any>(null);
    const { registerField, defaultValue = '', fieldName, error } = useField(
        name,
    );
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);
    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputValueRef.current.value);
    }, []);
    const inputValueRef = useRef<inputValueRefference>({ value: defaultValue });
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
        });
    }, [registerField, fieldName]);
    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    }));

    return (
        <Container
            isFilled={isFilled}
            isFocused={isFocused}
            isErrored={!!error}
        >
            <Icon
                name={icon}
                size={20}
                color={isFilled || isFocused ? colors.green1 : colors.grey3}
            />
            <TextInput
                ref={inputElementRef}
                keyboardAppearance="dark"
                defaultValue={defaultValue}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // placeholderTextColor={colors.green1}
                onChangeText={(value) => {
                    inputValueRef.current.value = value;
                }}
                {...rest}
            />
        </Container>
    );
};

export default forwardRef(Input);
