import styled, { css } from 'styled-components'

interface ContainerProps{
  first: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + &{
    margin-left: 24px;
  }

  >span{
    opacity: 85%;
    font-size: 22px;
    margin-bottom: 17px;
  }

  div{
    padding: 18px;
    width: 80px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 40px;

    ${props => props.first ? css`
      background: ${props.theme.primary};
    ` : css`
      background: ${props.theme.secondary};
      border: ${props.theme.border};
    `}

    svg{
      opacity: 85%;
      margin-bottom: -10px;
    }

    span{
      margin-top: 10px;
      font-size: 28px;
      color: ${props => props.theme.primary};
    }
  }
`
