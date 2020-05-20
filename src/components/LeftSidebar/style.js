import styled from 'styled-components';
import { theme } from '../../style/global';

import { FiMenu } from 'react-icons/fi';

export const Sidebar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    flex-direction: column;
    margin-left: 0.6vw;
`;

export const MenuButton = styled.div`
  display: flex;
  width: 3vw;
  height: 3vw;
  border-radius: 0.6vw;
  background: ${theme.colors.white};
  margin: 1vw auto;
  justify-content: center;
  align-items: center;
`;

export const MenuIcon = styled(FiMenu)`
    font-size: 2.5em;
    color: ${theme.colors.lightBlue};
    background: none;
    cursor: pointer;
`;

export const MenuBar = styled.div`
    width: 3vw;
    min-height: 88vh;
    background: ${theme.colors.white};
    border-radius: 0.6vw;
    margin: auto;
    padding: 0.1vw;
`;

export const MenuItem = styled.a`
    display: flex;
    width: 2.5vw;
    height: 2.5vw;
    border-radius: 0.6vw;
    margin: 0.3vw auto;
    background: ${props => props.isSelected? theme.colors.lightBlue : 'transparent'};
    color: ${props => props.isSelected? theme.colors.white : theme.colors.grey};;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.i`
    background: none;
    font-size: 1.6em;
`;