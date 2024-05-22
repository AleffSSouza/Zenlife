import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 20 1 100%;
  background-color: #d1eaee;
  @media (max-width: 768px) {
  }
`;

const SecondContainer = styled.div`
background: rgba( 105, 168, 244, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border-radius: 50px;
border: 2px solid rgba( 255, 255, 255, 0.18 );
`;

const MainImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 100%;
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
  text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.50);
  font-family: Asap;
  font-size: 40px;
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
  font-style: italic;
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
        <TextMainH1>Objetivos do projeto</TextMainH1>
        <SecondContainer>
        <TextMainP>
        A ODS 3, parte dos Objetivos de Desenvolvimento Sustentável da ONU, concentra-se na promoção da saúde e do bem-estar, incluindo a saúde mental. Seu objetivo é assegurar uma vida saudável e promover o bem-estar para todas as pessoas, em todas as idades. Isso inclui acesso equitativo a serviços de saúde de qualidade, prevenção de doenças, redução da mortalidade materna e infantil, combate às doenças transmissíveis, como HIV/AIDS e malária, e promoção da saúde mental. A ODS 3 busca garantir que todos tenham acesso a serviços de saúde mental adequados, reduzindo o estigma em torno das questões de saúde mental e promovendo a conscientização e o suporte emocional para aqueles que precisam.
        </TextMainP>
        <TextMainP>
          Motivação: BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA
        </TextMainP>
        <TextMainP>
          <ul> <li>Criar um site intuitivo e acessível para todos. </li>

            <li>Disponibilizar informações sobre o as ongs e maneiras de se cuidar sobre a saúde mental  </li>

            <li>Promover a visibilidade a esse problema e ongs que prestao esse serviço </li>

            <li>Contribuir para a inclusão social e o desenvolvimento social pessoal dos indivíduos atendidas  </li>
          </ul>
        </TextMainP>
        </SecondContainer>
      </TextMain>
    </MainContainer>
  );
};

export default Main;