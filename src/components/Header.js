import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-Items: center; //centraliza verticalmente os itens
    background-color: #7dbde4;
`;


function Header(){
    return(
        <HeaderContainer>
            <NavBar/>
        </HeaderContainer>
    );
}

export default Header;