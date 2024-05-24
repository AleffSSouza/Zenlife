import React from 'react';
import styled from 'styled-components';
import Icon from './icon';
import LogoFooter from "../assets/logosemfundo.png";

const FooterContainer = styled.footer`
  background-color: #0e2430;
  padding: 1em;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* adicionado para quebrar linha em telas menores */
`;

const FooterInfo = styled.div`
  margin-bottom: 10px;
  flex-basis: 28%; /* adicionado para que o texto ocupe metade da largura */
`;

const FooterImg = styled.img`
  margin-top: 20px;
  width: 25%;
  height: 25%;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterInfo>
        <p style={{ fontSize: '24px' }}>Zen Life</p>
        <p style={{ fontSize: '18px' }}>Copyright 2024 Zen Life. All rights reserved.</p>
        <p style={{ fontSize: '18px' }}>2024 - Creative Commons - Tracksuit Project Website by Aleff Souza, Claudio Endo, Luis Sparrapan e Matheus Zimmer  </p>
      </FooterInfo>
      <Icon/> 
      <FooterImg src={LogoFooter} alt="" />
    </FooterContainer>
  );
}

export default Footer;