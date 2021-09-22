import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
  }

  button {
    background: ${props => props.theme.buttom.background};
    color: ${props => props.theme.buttom.color};
    border: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  body {
    background: linear-gradient(${props => props.theme.background.primary} 0%, ${props => props.theme.background.secondary} 100%);
    font-size: 14px;
    color: ${props => props.theme.text.primary};
  }
`
