import React from 'react';

import {
    MainContainer,
    SearchContainer,
    SearchIcon,
    SearchInput,
    CalendarContainer,
    CalendarIcon,
    CalendarDate,
    ChevronDownIcon
} from './style';

export default function SearchBar() {
    return(
        <MainContainer>
            <SearchContainer>
                <SearchIcon />

                <SearchInput placeholder='Search'/>
            </SearchContainer>

            <CalendarContainer>
                <CalendarIcon />
                <CalendarDate> November - July 2019 </CalendarDate>
                <ChevronDownIcon />
            </CalendarContainer>
        </MainContainer>
    );
} 