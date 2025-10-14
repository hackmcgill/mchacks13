import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  margin-top: 360px;
  display: flex;
  padding-right: 200px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1500px) {
    margin-top: 300px;


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
