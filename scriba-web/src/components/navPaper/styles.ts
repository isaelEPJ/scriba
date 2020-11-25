import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const Container = styled.div`
    background-color: ${colors.blue2};
    display: flex;
    border-radius: 8px;
    height: 25px;
    align-items: center;
    align-content: center;
    .dataTask {
        color: ${colors.green1};
        cursor: 'pointer';
        display: 'flex';
        margin: 0 7px;
        align-content: center;
    }
    .scrollarea {
        max-height: 200px;
    }

    .butonsNavPaper {
        display: flex;
        align-content: center;
        justify-content: center;
        button {
            background-color: ${colors.blue2};
            color: ${colors.green1};
            border: 0;
            border-radius: 5px;
            margin: 0 10px;
            &:hover {
                color: ${shade(0.2, colors.redNotification)};
            }
        }
    }
    @media (max-width: 700px) {
        .butonsNavPaper {
            button {
                width: 70%;
            }
        }
    }
`;
