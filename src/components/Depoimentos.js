import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section2Container = styled.section`
  min-height: calc(75vh - 114px);
  display: flex;
  justify-content: center;
  align-items: center;
  Background-image: #white;
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
  font-size: 35px;
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

function Informacoes() {
  return (
    <Section2Container>
      <InformacoesStyle>
        <Informacao>
          <InformacaoH1>
            Depoimentos de Pessoas que Encontraram Apoio com Nossos Especialistas Parceiros</InformacaoH1>
          <InformacaoP>
            A jornada para o bem-estar mental pode ser desafiadora, mas contar com o apoio de especialistas dedicados faz toda a diferença. Aqui, compartilhamos os depoimentos de pessoas que encontraram esperança, suporte e transformação através do cuidado oferecido por nossos parceiros especializados. Suas histórias de superação não apenas inspiram, mas também demonstram a importância de buscar ajuda profissional.          </InformacaoP>
        </Informacao>
        <Informacao>
          <InformacaoH1>Nossos Especialistas Parceiros Cuidam de Você para Prevenir Problemas Maiores</InformacaoH1>
          <InformacaoP>
            Na jornada da vida, enfrentamos desafios que podem nos deixar vulneráveis ​​às vezes. É nessas horas que contar com o suporte adequado faz toda a diferença. Nossos especialistas parceiros estão aqui para garantir que você receba o cuidado necessário para prevenir problemas maiores antes que eles aconteçam.          </InformacaoP>
        </Informacao>

      </InformacoesStyle>
    </Section2Container>
  );
}

export default Informacoes;

