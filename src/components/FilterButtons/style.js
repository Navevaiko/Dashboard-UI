import styled from 'styled-components';

import { theme } from '../../style/global';

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
