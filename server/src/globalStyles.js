import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

const GlobalStyle = createGlobalStyle`
${reset}

html, body {
    overflow-y: auto;
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
    background: rgb(242, 247, 245);

}


`;

export default GlobalStyle;
