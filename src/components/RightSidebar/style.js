import styled from 'styled-components';
import { theme } from '../../style/global';

import Slider from 'infinite-react-carousel';

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
    font-weight: bold;
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
`;

export const SliderDot = styled.div`
    width: 0.4vw;
    height: 0.4vw;
    border-radius: 100%;
    background: ${theme.colors.lightGray};
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
    margin-top: 1.6vw;
    justify-content: space-around;
    align-items: center;
`;

export const FilterButon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3vw;
    height: 2.6vw;
    border-radius: 0.3vw;
    background: ${theme.colors.lightGray};
    color: ${theme.colors.lightBlue};
    font-size: 1.4em;
    cursor: pointer;
    margin-right: 0.6vw;
`;

export const SelectedFilterButton = styled(FilterButon)`
    flex: 1;
    background: ${theme.colors.lightBlue};
    color: ${theme.colors.white};
    justify-content: space-around;
    border-radius: 0.6vw;
`;

export const FilterButtonText = styled.h3`
    font-size: 0.8em;
    font-weight: normal;
`;