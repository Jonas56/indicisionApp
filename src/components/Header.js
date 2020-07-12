import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <h1>Expensify</h1>
    </header>
    <NavLink to="/" activeClassName="selected" exact="true">
      Home{" "}
    </NavLink>
    <NavLink to="/create" activeClassName="selected">
      Create Page{" "}
    </NavLink>

    <NavLink to="/help" activeClassName="selected">
      Help page
    </NavLink>
  </div>
);

export default Header;
