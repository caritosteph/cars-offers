import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderBar = styled.header`
padding: 0.625em 0 0.625em 0;
background-color: ${props => props.primaryColor};
width: 100%;
`
const StyledLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  :hover {
    color: #ededed;
  }
`;

const Header = ({ theme }) => (
  <HeaderBar theme={theme}>
    <StyledLink to='/'>Offers List</StyledLink>
  </HeaderBar>
)

export default Header;
