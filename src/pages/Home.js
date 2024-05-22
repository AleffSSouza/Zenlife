import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import QuoteSection from '../components/QuoteSections';
import ImageText from '../components/ImageText';
import IMG1 from '../assets/ong1.png'
import IMG2 from '../assets/ong2.jpg'
import IMG3 from '../assets/img2.png'
import IMG4 from '../assets/ong4.jpg'
import Footer from '../components/Footer';
import Bloco1 from '../components/Bloco1';
import Card from '../components/Card';
import styled from "styled-components";
import Noticias from '../components/Noticias';

const Cards = styled.div`
display: flex;
flex-direction: row;
display: flex;
padding: 30px;
color: black;
font-family: Asap;
font-size: 30px;
font-style: italic;
font-weight: 1000;
line-height: 30px;
text-align: left;
max-width: 100%;
word-break: break-word;
align: center;
border-radius: 8px;
width: 225px;
margin-left: 100;
margin-right: auto;
`
const TitleProjetos = styled.h1`
margin-bottom: 0;
color: black;
font-family: Asap;
font-size: 30px;
font-style: italic;
font-weight: 1000;
line-height: 30px;
text-align: center;
max-width: 100%;
word-break: break-word;
@media (max-width: 768px) {
  font-size: 12px;
  text-align:center;
  align-items: center;
  justify-content: center;
}
`;

function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <Bloco1/>
            <Noticias/>
            <QuoteSection/>
            <ImageText
                images={[
                    {src:IMG1 , alt: "", text: "Zipline" },
                    {src:IMG2 , alt: "", text: "Gradian Health Systems" },
                    {src:IMG3 , alt: "", text: "Bravo Tango" },
                    {src:IMG4 , alt: "", text: "Soy1Soy4" },
                ]}
            />
            
            <TitleProjetos>ODS 3 E O QUE É A DEPRESSÃO</TitleProjetos>
            <Cards>
            <Card id="LMOynUxsGHo"/>
            <Card id="gYx1fCOUpAw"/>
            <Card id="WpQHMxT-9y4"/>
            <Card id="DUdhc0hs6tU"/>
            <Card id="l16BskCD0cM"/>
            </Cards>
          
            <Footer />
        </div>

    );
}

export default Home;