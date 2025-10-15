import styled from "styled-components"
import * as styleVars from "../variable"

const currentPath = window.location.pathname;
const isSpecialPage = !["/privacy/", "/code-of-conduct/", "/discord-guide/"].includes(currentPath);

export const SocialLink = styled.a`
  color: ${isSpecialPage ? styleVars.hackWhite : styleVars.m13Red};
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;

  &:focus,
  &:hover {
    color: ${isSpecialPage ? styleVars.colorHackRed : styleVars.m12Maroon};
  }
`

export default SocialLink
