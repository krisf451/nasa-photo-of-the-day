import React, { useState } from "react";
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

const NasaNav = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="https://www.nasa.gov/">NASA</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://api.nasa.gov/">API</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.youtube.com/channel/UCLA_DiR1FfKNvjuUpBHmylQ">
              Youtube
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://explore.org/livecams/zen-den/international-space-station">
              Watch From Space
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret></DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Wiki</DropdownItem>
              <DropdownItem>Other Stuff</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NasaNav;
