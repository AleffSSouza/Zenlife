import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.png";

const LogoImg = styled.img`
display: flex;
padding-top: 4rem;
padding-right: 100rem;
padding: 5px 500px;
width: 5rem;
height: 5rem;
object-fit: cover;

`;

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2em 0;
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0 1em;
    &:hover{
        text-decoration: underline;
    }
`;

function NavBar(){
    return(
        <NavBarContainer>
            <StyledLink to="/">
            <LogoImg src={logo} alt="" />
            </StyledLink>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/depoimentos">Depoimentos</StyledLink>
            <StyledLink to="/intuitos">Intuitos</StyledLink>
            <StyledLink to="/contato">Contato</StyledLink>
            <StyledLink to="/cadastro">Cadastro</StyledLink>
        </NavBarContainer>
    );
}

export default NavBar;