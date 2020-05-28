import styled from 'styled-components';
import { theme } from '../../style/global';

import { GoCalendar } from 'react-icons/go';

export const TransactionTitleContainer = styled.div`
    display: flex;
    width: 90%;
    height: 6vh;
    margin-top: 1vw;
    padding: 0.6vw;
    align-items: center;
    justify-content: space-between;
`;

export const TransactionTitle = styled.h1`
    font-size: 1.2em;
`;

export const CalendarIcon = styled(GoCalendar)`
    font-size: 1.2em;
    color: ${theme.colors.lightBlue};
`;

export const TransactionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 38vh;
`;

export const TransactionCard = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6vw;
`;

export const TransactionIcon = styled.div`
    display: flex;
    width: 2vw;
    height: 2vw;
    border-radius: 0.5vw;
    background: ${prop => prop.bgColor};
    color: ${prop => prop.icColor};
    font-size: 1.2em;
    justify-content: center;
    align-items: center;
`;

export const TransactionInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 0.4vw;
`;

export const TransactionName = styled.h3`
    font-size: 0.9em;
    font-weight: 700;
    margin-bottom: 0.2vw;
`;

export const TransactionTime = styled.p`
    font-size: 0.9em;
    color: ${theme.colors.darkGrey};
`;

export const TransactionValue = styled.h3`
    font-size: 0.9em;
    font-weight: 700;
    margin-right: 0.4vw;
`;

export const ButtonViewAll = styled.button`
    width: 90%;
    height: 5vh;
    border: solid 2px ${theme.colors.lightGrey};
    border-radius: 0.6vw;
    color: ${theme.colors.lightBlue};
    background: transparent;
    cursor: pointer;
`;