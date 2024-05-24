import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #0e2430;
    padding: 1em;
    color: #fff;
    text-align: center;
`;

function Footer() {
    return (
        <FooterContainer>
            <p>Zen Life</p>
        </FooterContainer>
    );
}

export default Footer;