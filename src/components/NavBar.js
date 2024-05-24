import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import logo from "../assets/logosemfundo.png";

const LogoImg = styled.img`
  display: flex;
  padding-top: 4rem;
  padding-right: 1rem;
  padding: 5px 20px;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
`;

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em 1rem;
  

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5em 0;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1em;
  font-size:30px;
  &:hover {text-decoration: underline;}
  padding-right: 6rem;

  @media (max-width: 768px) {
    margin: 0.5em 0;
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <StyledLink to="/">
        <LogoImg src={logo} alt="" />
      </StyledLink>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/depoimentos">Depoimentos</StyledLink>
      <StyledLink to="/intuitos">Questionário</StyledLink>
      <StyledLink to="/contato">Contato</StyledLink>
      <StyledLink to="/cadastro">Cadastro</StyledLink>
    </NavBarContainer>
  );
}

export default NavBar;

