import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
    }

    html{
        font-size: 62.5%;
        font-family: Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;
    }
    button{
        cursor: pointer;
        border: none;
    }

    input, button,p, select{
        font-family: 'Times New Roman', Times, serif;
    }
`;

export default GlobalStyle;