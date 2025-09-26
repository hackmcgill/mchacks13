import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  margin-top: 450px;
  margin-bottom: 300px;
  display: flex;
  padding-right: 200px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;

  @media (max-width: 1200px) {
    margin-top: 200px;
    padding-right: 150px;
  }

  @media (max-width: 768px) {
    margin-top: 150px;
    padding-right: 100px;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
    padding-right: 50px;
  }
`

export default Container
