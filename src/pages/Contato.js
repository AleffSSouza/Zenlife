import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Banner from '../components/Banner'


function Contato(){
    return(
        <div>
            <Header/>
            <Banner />
            <ContactForm />
            <Footer/>
        </div>
    );
}
export default Contato