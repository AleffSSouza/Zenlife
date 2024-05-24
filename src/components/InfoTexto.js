import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import intImage1 from "../assets/tristonho.jpeg";


const Section2Container = styled.section`
  min-height: calc(75vh - 114px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;

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
font-size: 3rem; /* use relative font size */
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
          <InformacaoH1>Principais Causas da Depressão e ansiedade</InformacaoH1>
          <InformacaoP>
            <ul>

              <li><b>Genética:</b> Há uma predisposição genética para a depressão e ansiedade, com histórico familiar aumentando o risco.</li>
              <li><b>Neuroquímica:</b> Desequilíbrios nos neurotransmissores, como serotonina, dopamina e norepinefrina, estão associados à depressão.</li>
              <li><b>Hormônios:</b> Alterações hormonais, como aquelas associadas ao pós-parto, menopausa ou problemas na tireoide, podem desencadear depressão.</li>
              <li><b>Fatores Psicológicos:</b>
                <b>Traumas e Abusos:</b> Experiências traumáticas, como abuso emocional, físico ou sexual, podem contribuir significativamente para o desenvolvimento da depressão e ansiedade de alguma maneira.
                <b>Estresse Crônico:</b> Estressores contínuos, como problemas financeiros, conflitos familiares ou pressão no trabalho, podem levar à ansiedade posteriormente a depressão.
                <b>Baixa Autoestima:</b> Padrões de pensamento negativos e baixa autoestima estão frequentemente.</li>
              <li><b>Fatores Sociais:</b>
                <b>Isolamento Social:</b> A falta de apoio social e conexões significativas pode aumentar o risco.
                <b>Problemas Relacionais:</b> Conflitos interpessoais, divórcio ou a perda de um ente querido podem ser gatilhos.
                <b>Eventos de Vida:</b> Eventos estressantes ou mudanças significativas na vida, como desemprego ou mudança de residência, podem desencadear episódios depressivos e crises de ansiedade.</li>
            </ul>
          </InformacaoP>
        </Informacao>

      </InformacoesStyle>
    </Section2Container>
  );
}

export default Informacoes;