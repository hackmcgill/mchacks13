import styled from "styled-components"
import * as styleVars from "../variable"

export const NavLink = styled.a`
  font-family: 'Alfacade', sans-serif;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  cursor: pointer;
  color: ${styleVars.m13Red};
  text-decoration: none;
  transition: color 0.3s ease;

  &.active,
  &:focus,
  &:hover,
  &:active {
    background: transparent;
    color: ${styleVars.m13Orange};
  }

  .home-link {
  font-family: 'Alfacade';
  font-size: 20px;
  font-weight: 500;
  display: flex;
  cursor: pointer;
  color: ${styleVars.m13Red};
  text-decoration: none;
  transition: color 0.3s ease;}
}
`

export default NavLink
