import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import intImage1 from "../assets/anciedade.jpeg";


const Section2Container = styled.section`
  min-height: calc(75vh - 114px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
  Background-color:#031634;

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
          <InformacaoH1>Diagnósticos Ansiedade</InformacaoH1>
          <InformacaoP>
          <ul>
              <InformacaoH2> Sinais e sintomas da Ansiedade</InformacaoH2>
              A ansiedade é um sentimento natural dos seres humanos que permite antecipar situações de risco e preparar para os desafios diários. No entanto, quando essa emoção se torna muito intensa, com preocupações desproporcionais aos problemas e de forma contínua, ela se transforma em um transtorno. Esse transtorno pode interferir no descanso e desencadear sintomas específicos.
              <li>Preocupações, tensões ou medos exagerados</li>
              <li>Sensação contínua de que um desastre ou algo muito ruim vai acontecer</li>
              <li>Medo extremo de algum objeto, de ser humilhado publicamente ou de uma situação em particular </li>
              <li>Falta de controle sobre pensamentos, imagens ou atitudes, que se repetem independentemente da vontade</li>
              <li>Pavor depois de uma situação muito difícil</li>
              <li>Tensão muscular</li>
              <li>Intensificação ou surgimento de dores pelo corpo</li>
              <li>Insônia ou sono em excesso;</li>
              <li>Dificuldade para se desconectar dos problemas e para dormir </li>
              <li>Alterações no funcionamento do intestino</li>

              O diagnóstico de ansiedade geralmente é feito por um psiquiatra ou psicólogo. O processo envolve uma avaliação cuidadosa dos sintomas, histórico médico e informações sobre a vida do paciente.
            </ul>


          </InformacaoP>
        </Informacao>
        <Informacao>
          <BoxIntImg src={intImage1} alt="" />
        </Informacao>
      </InformacoesStyle>
    </Section2Container>
  );
}

export default Informacoes;