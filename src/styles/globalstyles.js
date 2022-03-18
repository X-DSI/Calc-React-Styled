import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    height: 100vh;
    width: 100vw;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  Button{
    
  }
  `;
