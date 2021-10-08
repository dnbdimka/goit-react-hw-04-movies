import styled from "styled-components";

export const NavContainer = styled.nav`
  & .nav__link {
    color: black;
    text-decoration: none;
    &-active {
      color: red;
    }
  }
`;
