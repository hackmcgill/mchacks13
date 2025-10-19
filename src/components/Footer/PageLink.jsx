import styled from "styled-components"
import * as styleVars from "../variable"


export const PageLink = styled.a`
  ${props => props.$isHomePage ? `
    color: ${styleVars.hackWhite};
    &:focus,
    &:hover {
      color: ${styleVars.colorHackRed};
    }
  ` : `
    color: ${styleVars.m13Red};
    &:focus,
    &:hover {
      color: ${styleVars.m12Maroon};
    } 
  `}  

  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  word-spacing: 3px;
`

export default PageLink
