import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;

  >div{
    display: flex;

    >div{
      display: flex;
    }
  }

  .divider{
    width: 100%;
    border: 1px solid ${props => props.theme.text.primary};
    opacity: 40%;
    margin: 32px 0 32px 0;
  }

  .content{
    justify-content: space-between;
    max-width: 1224px;
    margin: 96px 0;
    width: 100%;
    flex: 1;
  }
`

export const WeatherNow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;

  div{
    display: flex;
    align-items: center;

    svg{
      height: 60px;
      width: 60px;
      margin-left: 18px;
    }

    div{
      flex-direction: column;
      opacity: 85%;

      .date-week{
        font-size: 25px;
      }

      .date{
        font-size: 15px;
      }
    }

    .location{
      font-size: 26px;
    }

    .weather{
      margin-left: 24px;
      opacity: 85%;
    }

    .pin{
      margin-left: 0;
      margin-right: 16px;
      height: 29px;
      width: 29px;
    }
  }

  .temperature{
    font-size: 92px;
  }
`

export const WeatherDetails = styled.div`
  max-width: 1224px;
  width: 100%;
  margin-bottom: 96px;
  display: flex;
  flex-direction: column;
  flex: 1;

  >span{
    opacity: 85%;
    font-size: 26px;
    margin-bottom: 40px;
  }

  div+div{
    margin-bottom: 20px;
  }
`

interface HeaderProps {
  units: String
}

export const Header = styled.div<HeaderProps>`
  padding-top: 0px;
  min-height: 70px;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  >div{
    max-width: 1224px;
    width: 100%;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >button {
      margin-left: 20px;
      width: 163px;
      height: 32px;
      border-radius: 29px;
      background: ${props => props.theme.buttom};

      span{
        margin: 0 10px 0 10px;
        font-size: 20px;
      }

      .C {
        ${props => props.units === 'C' && css`
          color: #1AAFE0;
        `}
      }

      .F {
        ${props => props.units === 'F' && css`
          color: #1AAFE0;
        `}
      }

      div {
        width: 1px;
        height: 21px;
        transform: matrix(0.87, 0.5, -0.5, 0.87, 0, 0);
        background: black;
      }
    }
  }
`

export const SearchBar = styled.div `
  display: flex;
  width: 100%;
  max-width: 912px;
  flex-direction: column;


  form{
    width: 100%;

    div{
      display: flex;
      align-items: center;

      input{
        background: transparent;
        font-size: 18px;
        border: 0;
        width: 100%;
        outline: none;
        color: ${props => props.theme.text.primary};

        &::placeholder{
          color: ${props => props.theme.text.primary};
          opacity: 60%;
        }
      }

      button{
        background: transparent;
        color: ${props => props.theme.text.primary};
        opacity: 60%;
      }
    }

  }

  .underline{
    width: 100%;
    height: 1px;
    background: ${props => props.theme.text.primary};
    opacity: 60%;
  }
`

export const NotFound = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;

  img{
    height: 245px;
    margin-bottom: 97px;
  }

  span{
    font-size: 20px;
    opacity: 60%;
  }

  .notfound{
    margin-bottom: 4px;
    font-size: 32px;
    opacity: 85%;
  }
`

