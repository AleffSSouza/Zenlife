import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-Items: center; //centraliza verticalmente os itens
    background-color: #7dbde4;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    font-style: italic;
    font-size:1.5em;
`;


function Header(){
    return(
        <HeaderContainer>
            <div>Zen Life</div>
            <NavBar/>
        </HeaderContainer>
    );
}

export default Header;