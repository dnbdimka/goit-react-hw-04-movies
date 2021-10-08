import React from "react";
import { NavLink } from "react-router-dom";
import { NavContainer } from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink
        to="/"
        className="nav__link"
        activeClassName="nav__link-active"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className="nav__link"
        activeClassName="nav__link-active"
      >
        Movies
      </NavLink>
    </NavContainer>
  );
};

export default Navigation;
