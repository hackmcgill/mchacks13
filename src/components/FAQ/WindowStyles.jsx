import styled from "styled-components"
import * as styleVars from "../variable"

export const WindowStyles = styled.div`
  --scaling-factor: 1 / 1442 * 100vw;
  position: relative;
  margin: auto;
  top: 200px;

  width: calc(900 * var(--scaling-factor));
  height: calc(1172 * var(--scaling-factor));
  max-width: 900px;
  max-height: 1000px;
  text-align: center;
  background-color: rgba(170, 170, 170, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 16px 56px;

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
    height: calc(693 * var(--scaling-factor));
    padding-top: 120px;
    top: -130px;
  }

  .question {
    font-family: "Afacad";
    font-size: 16px;
    color: ${styleVars.m12White};
  }

  @media only screen and (max-width: 1400px) {
    width: calc(1271 * var(--scaling-factor));
    height: calc(1315 * var(--scaling-factor));
    max-height: initial;

    .content {
      height: calc(1000 * var(--scaling-factor));
      width: calc(1202 * var(--scaling-factor));
      max-height: initial;
      padding-top: 35px;
    }
    .questions {
      width: 50%;
      max-width: 750px;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: calc(1279 * var(--scaling-factor));
    height: calc(1558 * var(--scaling-factor));
    max-height: initial;

    .content {
      height: calc(1000 * var(--scaling-factor));
      width: calc(1202 * var(--scaling-factor));
      max-height: initial;
      padding-top: 25px;
    }

    .questions {
      width: 60%;
      max-width: 750px;
    }
  }

  @media only screen and (max-width: 1000px) {
    background-image: none;
    background-color: ${styleVars.hackWhite};

    border-radius: 32px;
    max-height: none;
    max-width: 720px;
    height: initial;
    width: 100%;
    top: 0;

    .content {
      position: initial;
      margin: auto;
      height: initial;
      width: 100%;
      max-height: none;
      padding-top: 80px;
      padding-bottom: 50px;
      padding-left: 40px;
      padding-right: 40px;
    }

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
