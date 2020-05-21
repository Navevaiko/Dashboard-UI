import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        lightBlue: '#4971FF',
        darkBlue: '#343662',
        lightGray: '#F4F6FD',
        lightGreen: '#7DD155',
        green: '#6FCC43',
        lightYellow: '#D84646',
        grey: '#EAEAEA',
        black: '#000000',
        white: '#FFFFFF',
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
        background: ${theme.colors.lightGray};
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100vh;  
    }
`;

export default Global;