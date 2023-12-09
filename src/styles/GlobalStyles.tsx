import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
    }
`;
