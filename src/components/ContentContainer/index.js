import React from 'react';

import { MainContainer } from './style';

export default function ContentContainer({ children }) {
    return(
        <MainContainer>
            { children }
        </MainContainer>
    );
}