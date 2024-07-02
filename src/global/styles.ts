import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
    button{
        cursor: pointer;
        border: none;
    }

    input, button,p, select{
        font-family: "Montserrat", sans-serif;
    }

    p{
        font-size: 14px;
    }
`;

export default GlobalStyle;