import React from "react";
import styled from "styled-components";



const MainContainer = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 20 1 100%;
  background-color: #d1eaee;
  @media (max-width: 768px) {
  }
`;

const TextMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  position: absolute;
  padding: 20px;
  max-width: 40%;
  text-align: center;
  z-index: 1;
  max-height: 80%;
  @media (max-width: 768px) {
    text-align:center;
    align-items: center;
    justify-content: center;
    top:auto;
    max-width: 100%;
    padding: 10px;
  }
`;

const TextMainH1 = styled.h1`
  color: #BLACK;
  font-family: "Varela Round;
  font-weight: 400;
  font-style: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;
const TextMainH2 = styled.h2`
  color: #BLACK;
  font-family: "Varela Round;
  font-size 24px;
  font-style: bold;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;

const TextMainP = styled.p`
  margin-bottom: 0;
  color: BLACK;
  font-family: Asap;
  font-size: 23px;
  // font-style: italic;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  max-width: 100%;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 12px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;

const Main = () => {
  return (
    <MainContainer>
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
  );
};

export default Main;