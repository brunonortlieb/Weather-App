import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    border: string;
    background: {
      primary: string;
      secondary: string;
    },
    text: {
      primary: string;
      secondary: string;
    }
    buttom: {
      background: string;
      color: string;
    };
  }
}
