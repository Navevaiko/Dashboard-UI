import styled from 'styled-components';
import { theme } from '../../style/global';

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