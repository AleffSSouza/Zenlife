import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import intImage1 from "../assets/cabisbaixo.jpeg";


const Section2Container = styled.section`
  min-height: calc(75vh - 114px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
  Background-color:#dce4f7;


`;

const InformacoesStyle = styled.div`
  flex-wrap: nowrap;
  width: 80%;
  height: 70%;
  border-radius: 10px;
  padding: 50px; 
  box-shadow: 23px 5px 20px 14px rgba(99, 96, 96, 0.75);
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  color: black;
  background-color: #d1eaee;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    flex-direction: column;
  }
`;

const Informacao = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  height: 100%;
  width: 100%;
  align-items: start;
  text-align: left;
  display: flex;
  flex-direction: column;
  border-right: gray solid;
  padding: 0 20px;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: gray solid;
    padding-bottom: 20px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;

const InformacaoH1 = styled.h1`
position: relative;
text-align: center;
font-size: 3rem; 
font-weight: bold;
font-family: Asap;

`;

const InformacaoH2 = styled.h2`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const InformacaoP = styled.p`
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const BoxIntImg = styled.img`
  margin-top: 40px;
  width: 90%;
  height: 70%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50%;
    height: 30%;
  }
`;

function Informacoes() {
  return (
    <Section2Container>
      <InformacoesStyle>
        <Informacao>
          <BoxIntImg src={intImage1} alt="" />
        </Informacao>
        <Informacao>
          <InformacaoH1>Diagnosticos Depressão</InformacaoH1>
          <InformacaoP>
            <ul>
              <InformacaoH2> Sinais e sintomas da depressão</InformacaoH2>
              A depressão é enfermidade crônica e silenciosa. Geralmente, a pessoa está tão vulnerável que não é capaz de perceber que algo não vai bem. Diante disso, a procura por ajuda médica tende a não ocorrer ou, se acontece, é tardiamente, quando a doença já se agravou.
              Por isso, é fundamental saber reconhecer os sinais e sintomas da depressão, que aparecem na maior parte dos casos, como:
              Sentimentos de tristeza e angústia na maior parte do tempo;
              Perda de prazer em atividades que normalmente gostava de praticar. Pode ser algum tipo de hobby, como nadar, correr, dançar ou jogar vídeo game.
              Essas alterações são sinais de alerta quando persistem por, no mínimo, duas semanas. No entanto, existem outras mudanças que podem não ser comuns a todas as pessoas com depressão, mas também são preocupantes. São elas:

              <li>Alteração repentina de peso sem motivo aparente;</li>
              <li>Irritabilidade;</li>
              <li>Frustração; </li>
              <li>Baixa autoestima;</li>
              <li>Ansiedade;</li>
              <li>Falta de energia;</li>
              <li>Cansaço contínuo;</li>
              <li>Insônia ou sono em excesso;</li>
              <li>Pensamentos negativos, como vontade de se machucar, morte e suicídio; </li>
              <li>Movimentos/ falas mais lentos ou acelerados.</li>

              É importante destacar que o fato de apresentar um ou mais dos sinais e sintomas listados, não significa, necessariamente, que a pessoa esteja com depressão. Somente um médico pode avaliar o caso, fazer o diagnóstico e indicar o tratamento mais adequado, mas que é importante ficar atento.
            </ul>


          </InformacaoP>
        </Informacao>

      </InformacoesStyle>
    </Section2Container>
  );
}

export default Informacoes;