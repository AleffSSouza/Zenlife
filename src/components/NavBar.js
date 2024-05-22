import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/depoimentos">Depoimentos</StyledLink>
            <StyledLink to="/temporadas">Temporadas</StyledLink>
            <StyledLink to="/contato">Contato</StyledLink>
            <StyledLink to="/cadastro">Cadastro</StyledLink>
        </NavBarContainer>
    );
}

export default NavBar;