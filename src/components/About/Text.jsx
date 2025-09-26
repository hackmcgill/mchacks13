import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  max-width: 575px;
  font-size: 16px;
  height: min-content;


  h1 {
    color: #D9F1FF;
    font-family: "Averia Serif Libre";
    font-size: 40px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2px;
    margin-bottom: 20px;
  }

  p {
    color: #D9F1FF;
    font-family: Afacad, sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    padding: 40px;
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    padding: 20px;
  }
`

export default Text
