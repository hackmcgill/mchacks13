import styled from "styled-components"
import * as styleVars from "../variable"

export const WindowStyles = styled.div`
  --scaling-factor: 1 / 1442 * 100vw;
  position: relative;
  margin: auto;

  width: calc(700 * var(--scaling-factor));
  max-width: 700px;
  text-align: center;
  background-color: rgba(170, 170, 170, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 16px 56px 32px;

  h2 {
    font-family: "Averia Serif Libre";
    color: ${styleVars.m13White};
    font-style: italic;
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 10px;
  }

  .content {
    position: relative;
  }

  .question {
    font-family: "Afacad";
    font-size: 16px;
    color: ${styleVars.m12White};
  }
  
  @media only screen and (max-width: 1400px) {
    .questions {
      width: 50%;
      max-width: 750px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .questions {
      width: 60%;
      max-width: 750px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .questions {
      width: 80%;
      max-width: 500px;
    }

    .QuestionBox {
      width: 100%;
      padding: 16px 24px;
      text-align: left;
      font-size: 1.2em;
      cursor: pointer;
      margin: 20px 0;
      box-sizing: border-box;
      height: auto;
    }
  }
`
export default WindowStyles
