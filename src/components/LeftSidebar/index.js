import React, { useState } from 'react';

import { 
    FiAlignLeft,
    FiBarChart2,
    FiMail,
} from 'react-icons/fi';

import { IoIosWallet } from 'react-icons/io';
import { BsFilter } from 'react-icons/bs';

import {
    Sidebar,
    MenuButton,
    MenuIcon,
    MenuBar,
    MenuItem,
    Icon
} from './style';

export default function LeftSidebar() {
    const [menuItens, setMenuItens] = useState([
        {icon: FiAlignLeft, isSelected: false },
        {icon: FiBarChart2, isSelected: true },
        {icon: FiMail, isSelected: false },
        {icon: BsFilter, isSelected: false },
        {icon: IoIosWallet, isSelected: false }
    ]);

    function handleMenuItemClick(itemIndex) {
        const newMenuItens = menuItens.map((item, index) => {
            item.isSelected = index === itemIndex;
            
            return item;
        });

        setMenuItens(newMenuItens);
    }
    
    return(
        <Sidebar>
            <MenuButton>
                <MenuIcon />
            </MenuButton>

            <MenuBar>
                {
                    menuItens.map((item, index) => (
                        <MenuItem
                            key={index}
                            isSelected={item.isSelected}
                            onClick={() => handleMenuItemClick(index)}>
                            <Icon as={item.icon} />
                        </MenuItem>
                    ))
                }
            </MenuBar>
        </Sidebar>
    );
}