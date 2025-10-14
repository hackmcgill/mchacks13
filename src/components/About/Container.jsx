import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  right: 300px;

  @media only screen and (max-width: 1250px) {
    margin-top: 100px;
  }

  @media only screen and (max-width: 1158px) {
    margin-top: 50px;
  }

`

export default Container
