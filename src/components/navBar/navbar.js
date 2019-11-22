import React from "react";
// import "./navBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default function NavBar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">NASA API </NavbarBrand>

      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/components/">Home</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
