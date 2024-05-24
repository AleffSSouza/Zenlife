import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section2Container = styled.section`
  min-height: calc(100vh - 188px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #376097;

`;

const InformacoesStyle = styled.div`
  flex-wrap: nowrap;
  width: 80%;
  height: 70%;
  border-radius: 60px;
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

const InformacaoLast = styled(Informacao)`
  border-right: none;
`;

const InformacaoH1 = styled.h1`
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InformacaoH2 = styled.h2`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InformacaoP = styled.p`
  width: 100%;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled(Link)`
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 1rem;
  padding-inline: 1.25rem;
  background-color: #001f4e;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  text-decoration: none;
  align-self: center;
`;

const Icon = styled.svg`
  fill: #ffffff;
  height: 16px;
  width: 16px;
`;


function Informacoes() {
  return (
    <Section2Container>
      <InformacoesStyle>
        <Informacao>
          <InformacaoH1>Principais Causas da Depressão e ansiedade</InformacaoH1>
          <InformacaoP>
            A depressão é um transtorno mental caracterizado por uma tristeza persistente e perda de interesse ou prazer em atividades anteriormente apreciadas. Pode afetar significativamente a maneira como uma pessoa se sente, pensa e lida com as atividades diárias.
          </InformacaoP>
          <Button to="/infobloco1">
            Saiba mais
            <Icon viewBox="0 0 24 24" class="icon">
              <path clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"></path>
            </Icon>
          </Button>
        </Informacao>
        <Informacao>
          <InformacaoH1>Diagnóstico
          </InformacaoH1>
          <InformacaoP>
            Para ser diagnosticado com depressão, os sintomas devem estar presentes por pelo menos duas semanas e representar uma mudança em relação ao funcionamento anterior. O diagnóstico é geralmente feito por um profissional de saúde mental, como um psicólogo ou psiquiatra, que pode utilizar critérios específicos, como os do Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5).          </InformacaoP>
          <Button to="/infobloco2">
            Saiba mais
            <Icon viewBox="0 0 24 24" class="icon">
              <path clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"></path>
            </Icon>
          </Button>
        </Informacao>
        <InformacaoLast>
          <InformacaoH1>Recomendações de tratamento</InformacaoH1>
          <InformacaoP>
            Aqui estão as principais estratégias de tratamento. Como no caso da depressão, o tratamento da ansiedade deve ser individualizado e supervisionado por profissionais de saúde. É importante que as pessoas com sintomas de ansiedade procurem ajuda médica para obter um diagnóstico adequado e um plano de tratamento eficaz.
          </InformacaoP>
          <Button to="/intuitos">
            Saiba mais
            <Icon viewBox="0 0 24 24" class="icon">
              <path clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"></path>
            </Icon>
          </Button>
        </InformacaoLast>
      </InformacoesStyle>
    </Section2Container>
  );
}

export default Informacoes;