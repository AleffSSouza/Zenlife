import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  height: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 20 1 100%;
  background-color: #d1eaee;
  @media (max-width: 768px) {
  }
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
        <TextMainP>
          ODS 3: BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA
          BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA

        </TextMainP>
        <TextMainP>
          Motivação: BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA
    
        </TextMainP>
        <TextMainP>
            Objetivo: BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA
            BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABL
        </TextMainP>

      </TextMain>
    </MainContainer>
  );
};

export default Main;