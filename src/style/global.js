import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        lightBlue: '#4971FF',
        darkBlue: '#343662',
        lightGrey: '#F4F6FD',
        lightGreen: '#E2F5D9',
        green: '#6FCC43',
        lightYellow: '#FFF3CD',
        darkGrey: '#AAAAAA',
        black: '#000000',
        white: '#FFFFFF',
        yellow: '#FFC518',
        red: '#DA3D3B',
        lightRed: '#FEECEB',
        gray: '#D4D4D4'
    }
};

const Global = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
    }

    body, #root {
        background: ${theme.colors.lightGrey};
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100vh;  
    }
`;

export default Global;