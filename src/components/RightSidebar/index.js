import React from 'react';

import { 
    Sidebar,
    PhotoContainer,
} from './style';

import CardsContainer from '../CardsContainer';
import FilterButtons from '../FilterButtons';
import TransactionsList from '../TransactionsList';

export default function RightSidebar() {

    return(
        <Sidebar>
            <PhotoContainer />
            
            <CardsContainer />
            
            <FilterButtons />

            <TransactionsList />
        </Sidebar>
    );
}