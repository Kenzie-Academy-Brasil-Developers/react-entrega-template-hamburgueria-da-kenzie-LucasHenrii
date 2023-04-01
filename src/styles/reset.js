import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding:0;
        font-family: 'Inter', sans-serif;
    }

    body{
        width:100vw;
        height: 100vh;
        overflow-x: hidden;
    }
`;
