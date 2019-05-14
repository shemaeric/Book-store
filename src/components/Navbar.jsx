import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';
import ButtonContainer from './Button';
import styled from 'styled-components';

class Navbar extends Component {
  render() {
    return <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5"> 
      <Link to="/">
        <img src={logo} alt="store" className="nav-logo"/>
      </Link> 
      <ul className="nav-bar align-items-center">
        <li>
          <Link className="nav-link" to="/">Book Store</Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span>
          <i className="fas fa-cart-plus"/>
          </span>
          my cart 
        </ButtonContainer>
      </Link>  
    </NavWrapper>
  }
}

const NavWrapper = styled.nav`
background: var(--mainNav);
ul {
  text-decoration: none;
  list-style-type: none !important;
};
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
  text-decoration: none;
  margin-top: 15px;
}
`

export default Navbar;
