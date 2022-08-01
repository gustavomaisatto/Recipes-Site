import {createGlobalStyle} from "styled-components";



export const Global = createGlobalStyle`
    *   {
        ::-webkit-scrollbar {
            display: none;
        }
        scrollbar-width: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        button{
            cursor: pointer;
            border: none;
        }
        a{
            outline: none;
            text-decoration: none;
        }
    }
`