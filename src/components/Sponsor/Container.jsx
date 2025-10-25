import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.section`
  position: relative;
  margin-top: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 280px;

  .campfire-image {
  position: absolute;
  top: -300px;
  right: 100px;
  width: 300px;
  fill: #fd8007; /* base orange fill */
  filter: drop-shadow(0 0 45px rgba(255, 203, 60, 1));
  animation: campfire-shine 2.5s infinite ease-in-out;
}

@keyframes campfire-shine {
  0%, 100% {
    filter: drop-shadow(0 0 30px rgba(255, 180, 50, 0.9));
  }
  50% {
    filter: drop-shadow(0 0 60px rgba(241, 241, 0, 1));
  }
}






  @media (max-width: 1500px) {
    margin-top: 300px;

  @media (max-width: 1200px) {
    margin-top: 200px;
    padding-right: 150px;
  }

  @media (max-width: ${styleVars.smUp}) {
    margin-top: 150px;
    padding-right: 100px;
    .campfire-image {
      display: none;
    }
  }

  @media (max-width: 480px) {
    margin-top: 100px;
    padding-right: 50px;
  }


  @media screen and (max-width: ${styleVars.xsUp}) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    margin-top: 20px;
    width: 80%;

    .campfire-image {
      display: none;
    }
  }
`

export default Container
