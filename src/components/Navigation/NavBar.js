import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default function NavBar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="#!">NASA API </NavbarBrand>

      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="#!">Home</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
