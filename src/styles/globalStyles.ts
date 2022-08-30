import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    padding-top: ${(props) => props.theme.boxSize.header};
    font-size: ${(props) => props.theme.fontSize.normal};
    line-height: 1.375rem;
  }

  button {
    border: none;
    background-color: ${(props) => props.theme.colors.white};
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSize.normal};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  ::-webkit-scrollbar {
    z-index: 1000;
    width: 0.6rem;
    height: 0.6rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.grey05};
  }

  ::-webkit-scrollbar-track {
    margin: $size-regular;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.grey01};
  }
`;

export default GlobalStyle;
