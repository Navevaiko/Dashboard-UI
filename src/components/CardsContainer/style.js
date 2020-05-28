
import styled from 'styled-components';

import { theme } from '../../style/global';

import Slider from 'infinite-react-carousel';

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