import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const Container = styled.div`
    position: relative;
    span {
        width: 160px;
        background: ${colors.redError};
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden;

        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);

        color: ${colors.white};
        ::before {
            content: '';
            position: absolute;
            border-style: solid;
            border-color: ${colors.redError} transparent;
            border-width: 6px 6px 0 6px;
            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;
