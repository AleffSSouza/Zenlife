import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import QuoteSection from '../components/QuoteSections';
// import ImageText from '../components/ImageText';
import IMG1 from '../assets/ong1.png'
import IMG2 from '../assets/ong2.jpg'
import IMG3 from '../assets/img2.png'
import IMG4 from '../assets/ong4.jpg'
import Footer from '../components/Footer';
import Bloco1 from '../components/Bloco1';
import Card from '../components/Card';
import styled from "styled-components";
import Noticias from '../components/Noticias';
import Informacoes from '../components/Informacoes';
import CarouselOng from '../components/CarouselOng'
import Icon from '../components/icon';


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

const ODS = styled.h5`
margin-bottom: 0;
color: white;
background-color:#001f4e;
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
´

// const Linker = styled.a`
//   text-decoration: none;
//   color:#F4AC54;
//   &: hover {
//     text-decoration: none;
//   }
//   background-color: #6C1C4C;
//   border-radius: 50%;
//   margin-right: 100px;
//   padding: 8px;
//   padding-right: 12px;
//   justify-content: center;
//   margin-top: 5%;
//   @media (max-width: 768px){
//     padding: 5px;
//     font-size: 12px;
//     padding-right: 5px;
//     margin-right: 50px;
// }`;

function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <Bloco1/>
            <Noticias/>
            <QuoteSection/>
            <CarouselOng/>
            {/* <ImageText
                images={[
                    {src:IMG1 , alt: "", text: "Zipline" },
                    {src:IMG2 , alt: "", text: "Gradian Health Systems" },
                    {src:IMG3 , alt: "", text: "Bravo Tango" },
                    {src:IMG4 , alt: "", text: "Soy1Soy4" },
                ]}
            /> */}
            <Informacoes/>
            {<TitleProjetos><ODS>ODS 3 - Saúde e o bem estar mental</ODS></TitleProjetos>}
            {<Cards>
            <Card id="LMOynUxsGHo"/>
            <Card id="gYx1fCOUpAw"/>
            <Card id="WpQHMxT-9y4"/>
            <Card id="r2a41vATOwU"/>
            <Card id="l16BskCD0cM"/>
            </Cards> }
            <Icon></Icon>
            <Footer />

        </div>

    );
}

export default Home;