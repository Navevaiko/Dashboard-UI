import React, { useState } from 'react';

import card_nubank from '../../assets/card_nubank.png';
import card_itau from '../../assets/card_itau.png';
import card_bradesco from '../../assets/card_bradesco.png';

import { 
    Sidebar,
    PhotoContainer,
    CardsTitle,
    CardsSection,
    Card,
    CardsSlider,
    SliderDot,
    SelectedSliderDot,
    FiltersContainers,
    FilterButon,
    SelectedFilterButton,
    FilterButtonText,
    FilterIcon,
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

import { theme } from '../../style/global';

import { FaExchangeAlt, FaTaxi, FaShoppingBag } from 'react-icons/fa';
import { RiDownloadLine, RiNetflixLine } from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';
import { GiKnifeFork } from 'react-icons/gi';

export default function RightSidebar() {
    const [cards, setCards] = useState([
        { image: card_nubank, showing: true },
        { image: card_itau, showing: false },
        { image: card_bradesco, showing: false }
    ]);

    const [filterButtons, setFilterButtons] = useState([
        { icon: FaExchangeAlt, name: 'Filter', selected: true },
        { icon: RiDownloadLine, name: 'Download', selected: false },
        { icon: FiPlus, name: 'Add card', selected: false }
    ]);

    const [transactions, setTransactions] = useState([
        { title: 'Taxi', icon: <FaTaxi />, time: '13:21pm', value: '- $ 9.20', color: theme.colors.lightBlue, bgColor: theme.colors.lightGrey },
        { title: 'Shopping', icon: <FaShoppingBag />, time: '11:15 am', value: '- $ 32.00', color: theme.colors.green, bgColor: theme.colors.lightGreen },
        { title: 'McDonald\'s', icon: <GiKnifeFork />, time: '10.07.2019', value: '- $ 4.30', color: theme.colors.yellow, bgColor: theme.colors.lightYellow },
        { title: 'Netflix', icon: <RiNetflixLine />, time: '3.07.2019', value: '- $ 7.99', color: theme.colors.red, bgColor: theme.colors.lightRed },
        { title: 'Shopping', icon: <FaShoppingBag />, time: '1.07.2019', value: '- $ 17.00', color: theme.colors.green, bgColor: theme.colors.lightGreen }
    ]);

    function changeSlider(cardIndex) {
        const newCards = cards.map((card, index) => {
            card.showing = index === cardIndex;
            
            return card;
        });

        setCards(newCards);
    }

    function handleFilterButtonClick(filterButtonIndex) {
        const newFilterButtons = filterButtons.map((filterButton, index) => {
            filterButton.selected = index === filterButtonIndex;
            
            return filterButton;
        });

        setFilterButtons(newFilterButtons);
    }

    const sliderSettings =  {
        arrows: false,
        slidesToShow: 1.1,
        afterChange: index => changeSlider(index),
      };

    return(
        <Sidebar>
            <PhotoContainer />
            <CardsTitle> My card </CardsTitle>

            <CardsSection {...sliderSettings}>
                {
                    cards.map((card, index) => (
                        <Card
                            key={index} 
                            src={card.image}
                        />
                    ))
                }
            </CardsSection>

            <CardsSlider>
                {
                    cards.map((card, index) => (
                        <SliderDot
                            key={index}
                            as={card.showing? SelectedSliderDot : null}
                            onClick={() => changeSlider(index)}
                        />
                    ))
                }
            </CardsSlider>
            
            <FiltersContainers>
            {
                filterButtons.map((filterButton, index) => {
                    return(
                        <FilterButon 
                            key={index} 
                            as={filterButton.selected? SelectedFilterButton: null}
                            onClick={() => handleFilterButtonClick(index)}>

                            <FilterButtonText show={filterButton.selected}> { filterButton.name } </FilterButtonText>
                            <FilterIcon show={filterButton.selected} as={filterButton.icon}/>
                        </FilterButon>
                    );
                })
            }
            </FiltersContainers>

            <TransactionTitleContainer>
                <TransactionTitle> Transaction </TransactionTitle>
                <CalendarIcon />
            </TransactionTitleContainer>

            <TransactionsContainer>
                {
                    transactions.map(transaction => (
                        <TransactionCard>
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
        </Sidebar>
    );
}