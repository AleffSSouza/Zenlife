import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Banner from '../components/Banner'
import styled from 'styled-components';


const titulo = styled.h1`
  margin-top: 5rem;
  color: #BLACK;
  font-family: Asap;
  font-size: 80px;
  text-align: center;
  font-family: Asap;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;

function Contato(){
    return(
        <div>
            <Header/>
            <ContactForm />
            <Footer/>
        </div>
    );
}
export default Contato