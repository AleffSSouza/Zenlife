import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section2Container = styled.section`
  min-height: calc(75vh - 114px);
  display: flex;
  justify-content: center;
  align-items: center;
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


function Informacoes() {
  return (
    <Section2Container>
      <InformacoesStyle>
        <Informacao>
          <InformacaoH1>Aqui Vemos os Depoimentos das pessoas como apoio por um cuidado com especialistas parceiros</InformacaoH1>
          <InformacaoP>
          A ODS 3, ou Objetivo de Desenvolvimento Sustentável número 3, visa assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades. Dentro deste objetivo, a saúde mental é um aspecto crucial, pois afeta diretamente a qualidade de vida das pessoas.
          </InformacaoP>
        </Informacao>
        <Informacao>
          <InformacaoH1>Especialistas pareceiros tomam conta de você para que o pior não aconteça</InformacaoH1>
          <InformacaoP>
          Para abordar esse tema, uma página de depoimentos pode servir como um valioso suporte emocional. Ao compartilhar experiências pessoais sobre saúde mental, as pessoas podem encontrar conforto ao perceberem que não estão sozinhas em seus desafios. Essa comunidade de apoio proporciona um espaço seguro para expressar sentimentos, buscar orientação e encontrar formas de enfrentar as dificuldades, contribuindo assim para a promoção da saúde mental e o alcance dos objetivos da ODS 3.
          </InformacaoP>
        </Informacao>

      </InformacoesStyle>
    </Section2Container>
  );
}

export default Informacoes;




{/* <MainContainer>
<TextMain>
  <TextMainH1>Aqui Vemos os Depoimentos</TextMainH1>
  <TextMainH2>das pessoas como apoio por um cuidado com especialistas parceiros.</TextMainH2>
  <TextMainP>
    A ODS 3, ou Objetivo de Desenvolvimento Sustentável número 3, visa assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades. Dentro deste objetivo, a saúde mental é um aspecto crucial, pois afeta diretamente a qualidade de vida das pessoas.
  </TextMainP>
  <TextMainP>
  Para abordar esse tema, uma página de depoimentos pode servir como um valioso suporte emocional. Ao compartilhar experiências pessoais sobre saúde mental, as pessoas podem encontrar conforto ao perceberem que não estão sozinhas em seus desafios. Essa comunidade de apoio proporciona um espaço seguro para expressar sentimentos, buscar orientação e encontrar formas de enfrentar as dificuldades, contribuindo assim para a promoção da saúde mental e o alcance dos objetivos da ODS 3.
  </TextMainP>
  <img src="../assets/ong1.png" alt="" width="100%" height="auto" />
</TextMain>
</MainContainer>
); */}