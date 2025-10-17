import styled from "styled-components"
import * as styleVars from "../variable"

export const SocialLink = styled.a`
  color: ${() =>
    typeof window !== "undefined" &&
    !["/privacy/", "/code-of-conduct/", "/discord-guide/"].includes(window.location.pathname)
      ? styleVars.hackWhite
      : styleVars.m13Red};
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;

  &:focus,
  &:hover {
    color: ${() =>
      typeof window !== "undefined" &&
      !["/privacy/", "/code-of-conduct/", "/discord-guide/"].includes(window.location.pathname)
        ? styleVars.colorHackRed
        : styleVars.m12Maroon};
  }
`;

export default SocialLink;
