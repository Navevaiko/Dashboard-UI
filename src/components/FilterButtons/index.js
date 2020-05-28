import React, { useState } from 'react';

import { FaExchangeAlt } from 'react-icons/fa';
import { RiDownloadLine } from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';

import {
    FiltersContainers,
    FilterButon,
    SelectedFilterButton,
    FilterButtonText,
    FilterIcon,
} from './style';

export default function FilterButtons() {
    const [filterButtons, setFilterButtons] = useState([
        { icon: FaExchangeAlt, name: 'Filter', selected: true },
        { icon: RiDownloadLine, name: 'Download', selected: false },
        { icon: FiPlus, name: 'Add card', selected: false }
    ]);    

    function handleFilterButtonClick(filterButtonIndex) {
        const newFilterButtons = filterButtons.map((filterButton, index) => {
            filterButton.selected = index === filterButtonIndex;
            
            return filterButton;
        });

        setFilterButtons(newFilterButtons);
    }

    return(
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
    );
}