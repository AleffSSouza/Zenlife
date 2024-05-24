import React from 'react';
import styled from 'styled-components';
import Icon from './icon';
import LogoFooter from "../assets/logosemfundo.png";

const FooterContainer = styled.footer`
background-color: #0e2430;
padding: 1em;
color: #fff;
justify-content: space-between;
align-items: center;
`;

const FooterInfo = styled.div`
  margin-bottom: 10px;
`;

const FooterImg = styled.img`
width: 10%;
height: 5%;
margin-left: auto;
`;


function Footer() {
  return (
    <FooterContainer>
      <FooterInfo>
        <p>Zen Life</p>
        <p>Copyright 2023 Zen Life. All rights reserved.</p>
        <p>Contact us: <a href="mailto:info@zenlife.com">info@zenlife.com</a></p>
      </FooterInfo>
      <FooterImg src={LogoFooter} alt="" />
      

      <Icon />
    </FooterContainer>
  );
}

export default Footer;