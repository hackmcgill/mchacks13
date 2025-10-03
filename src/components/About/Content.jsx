import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1440px;
  gap: 60px;

  @media only screen and (max-width: ${styleVars.mdUp}) {
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;

    .bubbles {
      display: none;
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    padding: 0;
  }
`
