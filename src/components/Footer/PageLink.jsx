import styled from "styled-components"
import * as styleVars from "../variable"


export const PageLink = styled.a`
  color: ${() =>
    typeof window !== "undefined" &&
    !["/privacy/", "/code-of-conduct/", "/discord-guide/"].includes(window.location.pathname)
      ? styleVars.hackWhite
      : styleVars.m13Red};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  word-spacing: 3px;

  &:focus,
  &:hover {
    color: ${() =>
      typeof window !== "undefined" &&
      !["/privacy/", "/code-of-conduct/", "/discord-guide/"].includes(window.location.pathname)
        ? styleVars.colorHackRed
        : styleVars.m12Maroon};
  }
`

export default PageLink
