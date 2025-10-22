import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.section`
  position: relative;
  margin-top: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1500px) {
    margin-top: 300px;

  @media (max-width: 1200px) {
    margin-top: 200px;
    padding-right: 150px;
  }

  @media (max-width: ${styleVars.smUp}) {
    margin-top: 150px;
    padding-right: 100px;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
    padding-right: 50px;
  }

  @media screen and (max-width: ${styleVars.xsUp}) {
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    margin-top: 20px;
    width: 80%;
    right: 0px;
  }
`

export default Container
