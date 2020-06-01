import React from 'react';


import { theme } from '../../style/global';

import { FaTaxi, FaShoppingBag } from 'react-icons/fa';
import { RiNetflixLine } from 'react-icons/ri';
import { GiKnifeFork } from 'react-icons/gi';

import {
    TransactionTitleContainer,
    TransactionTitle,
    CalendarIcon,
    TransactionsContainer,
    TransactionCard,
    TransactionIcon,
    TransactionInfo,
    TransactionName,
    TransactionTime,
    TransactionValue,
    ButtonViewAll
} from './style';

export default function TransactionsList() {
    const transactions = [
        { title: 'Taxi', icon: <FaTaxi />, time: '13:21pm', value: '- $ 9.20', color: theme.colors.lightBlue, bgColor: theme.colors.lightGrey },
        { title: 'Shopping', icon: <FaShoppingBag />, time: '11:15 am', value: '- $ 32.00', color: theme.colors.green, bgColor: theme.colors.lightGreen },
        { title: 'McDonald\'s', icon: <GiKnifeFork />, time: '10.07.2019', value: '- $ 4.30', color: theme.colors.yellow, bgColor: theme.colors.lightYellow },
        { title: 'Netflix', icon: <RiNetflixLine />, time: '3.07.2019', value: '- $ 7.99', color: theme.colors.red, bgColor: theme.colors.lightRed },
        { title: 'Shopping', icon: <FaShoppingBag />, time: '1.07.2019', value: '- $ 17.00', color: theme.colors.green, bgColor: theme.colors.lightGreen }
    ];

    return(
        <>
            <TransactionTitleContainer>
                <TransactionTitle> Transaction </TransactionTitle>
                <CalendarIcon />
            </TransactionTitleContainer>

            <TransactionsContainer>
                {
                    transactions.map((transaction, index) => (
                        <TransactionCard key={index}>
                            <TransactionIcon 
                                bgColor={transaction.bgColor}
                                icColor={transaction.color}>
                                { transaction.icon }
                            </TransactionIcon>

                            <TransactionInfo>
                                <TransactionName> { transaction.title } </TransactionName>
                                <TransactionTime> { transaction.time } </TransactionTime>
                            </TransactionInfo>

                            <TransactionValue>
                                { transaction.value }
                            </TransactionValue>
                        </TransactionCard>

                    ))
                }
            </TransactionsContainer>

            <ButtonViewAll>
                View All
            </ButtonViewAll>
        </>
    );
}