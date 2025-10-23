import styled from "styled-components"
import * as styleVars from "../variable"


const Container = styled.section`
  position: relative;
  margin-top: 360px;
  padding-right: 400px;
  height: 1600px;

  .QuestionBox {
    padding: 14px 24px;
    border-radius: 24px;
    text-align: left;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.5s ease;
    margin-bottom: 29px;
    box-sizing: border-box;
    background-color: white;

    a {
      color: ${styleVars.m12DarkestGrey};
    }

    .questionRow {
      display: flex;

      .question {
        color: ${styleVars.hackBlack80};
      }

      .spacer {
        flex: 1;
      }

      .expandButton > img {
        opacity: 90%;
        position: relative;
        top: 0px;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
    }

    .answer {
      font-family: "Afacad";
      color: ${styleVars.m12DarkestGrey};
      margin-top: 10px;
      font-size: 0.9em;
      display: none;
    }

    &.expanded {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      align-self: stretch;

      .answer {
        display: block;
      }

      .expandButton > img {
        transform: rotate(-180deg);
      }

      .question {
        color: ${styleVars.m12DarkestTeal};
      }
    }
  }

  &.hidden {
    display: none !important;
  }

  @media screen and (max-width: ${styleVars.xsUp}) {
    margin-top: 20px;
    padding-right: 0;
    height: 600px;

    .QuestionBox {
      padding: 6px 24px;
      margin-bottom: 10px;
    }
  }
`

export default Container
