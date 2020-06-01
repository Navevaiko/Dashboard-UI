import styled from 'styled-components';
import { theme } from '../../style/global';

export const MainContainer = styled.div`
    width: 70vw;
    height: 50vh;
    background: ${theme.colors.white};
    margin-top: 2vw;
    margin-right: 1vw;
    border-radius: 0.6vw;
    padding: 0.6vw;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const TotalValue = styled.h1`
    font-size: 1.6em;
    margin-right: 1.2vw;
`;

export const Growth = styled.h3`
    display: flex;
    width: 5.2vw;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.green};
    font-size: 1.2em;
    margin-right: 0.6vw;
`;

export const ChartTypes = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    height: 5vh;
`;

export const ChartButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.isSelected? theme.colors.lightGrey : 'transparent'};
    color: ${props => props.isSelected? theme.colors.lightBlue : theme.colors.gray };
    font-size: 1.6em;
    width: 2vw;
    height: 2vw;
    border-radius: 0.6vw;
    margin-right: 0.6vw;
    cursor: pointer;
`;