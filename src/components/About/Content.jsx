import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(170, 170, 170, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari support */
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 16px 36px;
  gap: 60px;
  box-sizing: border-box;

  /* Desktop sizing */
  width: fit-content;
  max-width: 1440px;

  @media only screen and (max-width: ${styleVars.mdUp}) {
    /* Mobile/Tablet: Fill width cleanly inside parent */
    width: calc(100% - 32px);
    flex-direction: column;
    justify-content: center;
    padding: 40px 30px 16px 30px;

    .bubbles {
      display: none;
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    padding: 20px 16px;
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    width: calc(100% - 20px);
    padding: 10px;
    gap: 30px;
  }
`
