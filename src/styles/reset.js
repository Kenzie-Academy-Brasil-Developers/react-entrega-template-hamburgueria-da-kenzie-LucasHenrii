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

    :root{
         --color-primary:#27AE60;
    --color-primary50:#93D7AF;
    --color-secondary: #EB5757;
    --color-gray100:#333333;
    --color-gray50:#828282;
    --color-gray20:#E0E0E0;
    --color-gray0:#F5F5F5;
    --negative:#E60000;
    --warning:#FFCD07;
    --sucess:#168821;
    --information:#155BCB;
    }
`;
