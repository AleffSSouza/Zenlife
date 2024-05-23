import React from 'react';
import styled from 'styled-components';
import noticiasImage1 from "../assets/noticiaimg1.jpg";
import noticiasImage2 from "../assets/noticiaimg2.jpg";
import noticiasImage3 from "../assets/noticiaimg3.jpg";
import { Link } from 'react-router-dom';

const Section4Container = styled.section`
  height: 1200px;
  display: flex;
  flex: 20 1 100%;
  background-color: #d1eaee;
  @media (max-width: 768px) {
    flex-direction: column;
	height: 1000px;
  
  }
`;

const Noticia = styled.div`
  width: 100%;
  height: 80%;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Section4H1 = styled.h1`
  position: relative;
  text-align: center;
  font-size: 80px;
  font-weight: bold;
  font-family: Asap;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    top: 0;
    left: 0;
  }
`;

const GroupNoticias = styled.div`
  position: relative;
  left: 10%;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    align-items:center;
  }
`;

const BoxNoticias = styled.div`
  background-color: #1b4072;
  width: 40%;
  height: 100%;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  @media (max-width: 768px) {
    width: 65%;
    margin: 20px 0;
	  text-align: center;
    align-items:center;
    height: auto;
  }
`;

const BoxNoticiasImg = styled.img`
  margin-top: 40px;
  width: 90%;
  height: 50%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50%;
    height: 30%;
  }
`;

const BoxNoticiasP = styled.p`
  position: relative;
  top: 5%;
  width: 80%;
  height: 30%;
  text-align: center;
  color: white;
  font-size: 20px;
  @media (max-width: 768px) {
    position: relative;
    bottom:50%;
    height: auto;
    margin-bottom: 30px;
  }
`;
const Linker = styled.a`
  text-decoration: none;
  color:#fff;
  &: hover {
    text-decoration: none;
  }
  background-color: #rrggbbaa;
  justify-content: center;
  margin-top: 5%;
  @media (max-width: 768px){
    padding: 5px;
    font-size: 12px;
    padding-right: 5px;
    margin-right: 50px;
}`;

const Button = styled.button`
margin-top: 20px;
margin-left: 140px;
transition: all 0.3s ease-in-out;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
padding-block: 0.3px;
padding-inline: 1.25rem;
background-color: #001f4e;
border-radius: 9999000px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
color: #ffff;
font-weight: bold;
border: 3px solid #ffffff4d;
outline: none;
overflow: hidden;
font-size: 16px;
text-decoration: none;

@media (max-width: 768px) {
    margin-top: 1rem;

    }
`;


function Noticias() {
  return (
    <Section4Container>
      <Noticia>
        <Section4H1>Notícias</Section4H1>
        <GroupNoticias>
          <BoxNoticias>
            <BoxNoticiasImg src={noticiasImage1} alt="" />
            <BoxNoticiasP>
            Médico fala sobre diferença entre níveis baixos de testosterona e depressão
              <Button> <Linker href="https://www.em.com.br/saude/2024/05/6862667-medico-fala-sobre-diferenca-entre-niveis-baixos-de-testosterona-e-depressao.html">   <p>Clique aqui para a noticia</p></Linker></Button>
            </BoxNoticiasP>
          </BoxNoticias>
          <BoxNoticias>
            <BoxNoticiasImg src={noticiasImage2} alt="" />
            <BoxNoticiasP>
            A onda de agressão a professores no mundo: 'Ficar perto da porta para sair correndo'
              <Button> <Linker href="https://www.bbc.com/portuguese/articles/c51n99rp3lpo">   <p>Clique aqui para a noticia</p></Linker></Button>
            </BoxNoticiasP>
          </BoxNoticias>
          <BoxNoticias>
            <BoxNoticiasImg src={noticiasImage3} alt="" />
            <BoxNoticiasP>
            Depressão em idosos: por que doença ainda é difícil de ser diagnosticada
              <Button> <Linker href="https://www.bbc.com/portuguese/articles/c1eyeegvq39o">   <p>Clique aqui para a noticia</p></Linker></Button>
            </BoxNoticiasP>
          </BoxNoticias>
        </GroupNoticias>
      </Noticia>
    </Section4Container>
  );
}

export default Noticias;