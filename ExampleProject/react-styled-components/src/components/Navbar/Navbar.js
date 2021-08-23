import React, {Fragment} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavLogo,NavbarContainer,MobileIcon,NavMenu,NavLinks,NavItem,NavBtnLink,NavBtn} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
      <Fragment>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <span className="fromLeft">dolla</span>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">
                  <span className="fromLeft">About</span>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover">
                  <span className="fromLeft">Discover</span>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">
                  <span className="fromLeft">Services</span>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup">
                  <span className="fromLeft">Sign Up</span>
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">
                Sign In
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </Fragment>
  )
}

export default Navbar;