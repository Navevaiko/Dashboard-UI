import styled from 'styled-components';
import { theme } from '../../style/global';

import Slider from 'infinite-react-carousel';


import { GoCalendar } from 'react-icons/go';

export const Sidebar = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 1vw 1.6vw 0 auto;
    height: 97vh;
    width: 18vw;
    background: ${theme.colors.white};
    border-radius: 1vw;
`;

export const PhotoContainer = styled.div`
    position: absolute;
    width: 2.6vw;
    height: 2.6vw;
    border-radius: 0.6vw;
    background: url('https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2082&q=80');
    background-size: cover;
    background-position: center;
    top: -0.6vw;
    right: 0.6vw;
`;

export const CardsTitle = styled.h1`
    font-size: 1.2em;
    margin: 2vw auto 1.2vw 1.6vw;
`;

export const CardsSection = styled(Slider)`
    width: 19vw;
    height: 20vh;
    margin-left: -1vw;
    overflow-x: hide;
`;

export const Card = styled.img`
    max-width: 16vw;
    max-height: 36vh;
`;

export const CardsSlider = styled.div`
    display: flex;
    flex-direction: row;
    width: 16vw;
    height: 4vh;
    margin-top: 1.6vw;
    justify-content: flex-start;
    align-items: center;
`;

export const SliderDot = styled.div`
    width: 0.4vw;
    height: 0.4vw;
    border-radius: 100%;
    background: ${theme.colors.gray};
    margin-right: 0.6vw;
`;

export const SelectedSliderDot = styled(SliderDot)`
    height: 0.4vw;
    width: 2.6vw;
    background: ${theme.colors.lightBlue};
    border-radius: 0.2vw;
`;

export const FiltersContainers = styled.div`
    display: flex;
    flex-direction: row;
    width: 16vw;
    height: 8vh;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.2vw;
`;

export const FilterButon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3vw;
    height: 2.6vw;
    border-radius: 0.3vw;
    background: ${theme.colors.gray};
    cursor: pointer;
    margin-right: 0.6vw;
`;

export const SelectedFilterButton = styled(FilterButon)`
    flex: 1;
    background: ${theme.colors.lightBlue};
    justify-content: space-around;
    border-radius: 0.6vw;
`;

export const FilterButtonText = styled.h3`
    font-size: 1em;
    font-weight: normal;
    color: ${theme.colors.white};
    display: ${prop => prop.show? 'inline-block' : 'none'};
`;

export const FilterIcon = styled.i`
    color: ${prop => prop.show? theme.colors.white : theme.colors.lightBlue};
    font-size: 1.4em;
`;

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