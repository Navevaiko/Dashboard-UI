import styled from 'styled-components';
import { theme } from '../../style/global';

import { GoSearch, GoChevronDown } from 'react-icons/go';
import { BsCalendar } from 'react-icons/bs';

export const MainContainer = styled.div`
    display: flex;
    width: 75vw;
    height: 6vh;
    margin-top: 1vw;
    margin: 1vw auto 0 auto;
    justify-content: space-between;
    align-items: center;
`;

export const SearchContainer = styled.div`
    display: flex;
    width: 52vw;
    height: 6vh;
    border: solid 1px ${theme.colors.gray};
    border-radius: 0.6vw;
    justify-content: space-between;
    align-items: center;
    padding: 0.6vw;
    margin-left: 2vw;
`;

export const SearchIcon = styled(GoSearch)`
    color: ${theme.colors.lightBlue};
    font-size: 1.4em;
`;

export const SearchInput = styled.input`
    width: 96%;
    height: 100%;
    background: transparent;
    color: ${theme.colors.black};
`;

export const CalendarContainer = styled.div`
    display: flex;
    width: 15vw;
    height: 6vh;
    border-radius: 0.6vw;
    background: ${theme.colors.white};
    justify-content: space-around;
    align-items: center;
    margin-right: 4vw;
`;

export const CalendarIcon = styled(BsCalendar)`
    color: ${theme.colors.lightBlue};
    font-size: 1.2em;
`;

export const CalendarDate = styled.p`
    font-size: 1em;
`;

export const ChevronDownIcon = styled(GoChevronDown)`
    color: ${theme.colors.lightBlue};
    font-size: 1.2em;
    cursor: pointer;
`;