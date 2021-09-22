import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  width: 288px;
  height: 146px;
  padding: 36px 31px;
  background: ${props => props.theme.tertiary};
  opacity: 85%;
  border-radius: 4px;
  color: ${props => props.theme.text.secondary};
  box-shadow: 0px 3px 6px #00000029;

  &+&{
    margin-left: 24px;
  }

  >span{
    font-weight: 700;
    font-size: 18px;
    opacity: 60%;
  }

  >div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    span{
      font-weight: 600;
      font-size: 32px;
      opacity: 85%;
    }

    svg{
      color: #13264ADD;
      opacity: 100%;
    }

    .r{
      margin-right: -14px;
    }

    .l{
      margin-left: -12px;
      margin-right: -10px;
    }
  }
`
