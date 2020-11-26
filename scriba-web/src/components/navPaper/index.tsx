import { Typography } from '@material-ui/core';
import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { colors } from '../../assets/colors';
import {
    AlteredDataText,
    CreatedDataText,
    DetailsButtonText,
    FinalizeButtonText,
    ForwardButtonText,
} from '../../assets/strings';
import { Container } from './styles';

const NavPaper: React.FC = () => {
    return (
        <Container>
            <FiTrash
                size={20}
                style={{
                    margin: '0 8px 0 17',
                    color: colors.green1,
                    cursor: 'pointer',
                }}
            />
            <FiEdit
                size={20}
                style={{
                    margin: '0 10px 0 8px',
                    color: colors.green1,
                    cursor: 'pointer',
                }}
            />
            <Typography
                style={{
                    margin: '0 7px',
                    color: colors.green1,
                }}
            >
                ID:99183
            </Typography>
            <Typography
                style={{
                    margin: '0 7px',
                    alignContent: 'center',
                    display: 'flex',
                    color: colors.green1,
                }}
            >
                18/11/2020
                <AiOutlineExclamationCircle
                    size={11}
                    title={CreatedDataText}
                    style={{
                        cursor: 'help',
                        alignSelf: 'center',
                        display: 'flex',
                        color: colors.redError,
                    }}
                />
            </Typography>
            <Typography
                style={{
                    display: 'flex',
                    margin: '0 7px',
                    color: colors.green1,
                }}
            >
                30/11/2020
                <AiOutlineExclamationCircle
                    size={11}
                    title={AlteredDataText}
                    style={{
                        cursor: 'help',
                        alignSelf: 'center',
                        display: 'flex',
                        color: colors.redError,
                    }}
                />
            </Typography>
            <div className="butonsNavPaper">
                <button>{DetailsButtonText}</button>
                <button>{ForwardButtonText}</button>
                <button>{FinalizeButtonText}</button>
            </div>
        </Container>
    );
};
export default NavPaper;
