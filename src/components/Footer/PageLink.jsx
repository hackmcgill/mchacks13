import styled from "styled-components"
import * as styleVars from "../variable"

const currentPath = window.location.pathname;
const isSpecialPage = !["/privacy/", "/code-of-conduct/", "/discord-guide/"].includes(currentPath);

export const PageLink = styled.a`
  color: ${isSpecialPage ? styleVars.hackWhite : styleVars.m13Red};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  word-spacing: 3px;

  &:focus,
  &:hover {
    color: ${isSpecialPage ? styleVars.colorHackRed : styleVars.m12Maroon};
  }
`

export default PageLink
