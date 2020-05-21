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
    SelectedSliderDot
} from './style';

export default function RightSidebar() {
    const [cards, setCards] = useState([
        { image: card_nubank, showing: true },
        { image: card_itau, showing: false },
        { image: card_bradesco, showing: false }
    ]);

    function changeSlider(cardIndex) {
        const newCards = cards.map((card, index) => {
            card.showing = index === cardIndex;
            
            return card;
        });

        setCards(newCards);
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
        </Sidebar>
    );
}