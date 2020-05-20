import styled from 'styled-components';
import { theme } from '../../style/global';

export const Sidebar = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    flex-direction: column;
    margin-right: 0.6vw;
    border: 1px #000 solid;
    height: 100vh;
    width: 2vw;
`;

export const PhotoContainer = styled.div`
    /* position: absolute; */
    width: 2vw;
    height: 2vw;
    border-radius: 0.6vw;
    background: #000;
`;