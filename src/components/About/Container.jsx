import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1250px) {
    margin-top: 100px;
  }

  @media only screen and (max-width: 1158px) {
    margin-top: 50px;
  }

`

export default Container
