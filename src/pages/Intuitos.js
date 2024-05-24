import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselOng from '../components/CarouselOng'
import BlocoInt from '../components/BlocoInt'
import Bloco1Int from '../components/Bloco1Int'
import InfoTexto3 from '../components/InfoTexto3'


function Intuitos(){
    return(
        <div>
            <Header/>
            <Bloco1Int/>
            <BlocoInt/> 
            <InfoTexto3/>
            <Footer/>
        </div>
    );
}
export default Intuitos;