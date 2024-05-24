import React from "react";
import styled from "styled-components";
import fundo from "../assets/fundoquestionario.jpg";


const MainContainer = styled.div`
  position: relative;
  padding: 70px;
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 20 1 100%;
  background-image: url(${fundo});
  background-size: cover;

  @media (max-width: 768px) {
    height: 1200px;
  }
`;

const SecondContainer = styled.div`
  background: rgba( 105, 168, 244, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border-radius: 50px;
  border: 2px solid rgba( 255, 255, 255, 0.18 );
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
  margin-top: 5rem;
  color: #BLACK;
  font-size: 80px;
  text-align: center;
  font-family: Asap;
  font-weight: bold;
  color: #BLACK;
    font-family: Blippo, fantasy;
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
  padding: 10px;
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
                <TextMainH1>Questionário</TextMainH1>
                <SecondContainer>
                    <TextMainP>
                        Abaixo está uma lista de sintomas comuns à ansiedade. Por favor, leia cuidadosamente cada item da lista. Identifique o quanto você̂ tem sido incomodado(a) por cada um dos sintomas durante a última semana, incluindo hoje.
                        Sendo:
                        <ul>
                            <ol>0: Absolutamente não  </ol>
                            <ol>1: Não me incomodou muito </ol>
                            <ol>2:  Foi muito desagradável, mas pude suportar </ol>
                            <ol>3: Dificilmente pude suportar </ol>
                        </ul>

                    </TextMainP>
                    <TextMainP>
                        Perguntas:
                        <ol >
                            <ol>1. Dormência ou formigamento - valor:1</ol>
                            <ol>2. Sensação de calor - valor:2 </ol>
                            <ol>3. Tremores nas pernas - valor:3 </ol>
                            <ol>4. Incapaz de relaxar - valor:4 </ol>
                            <ol>5. Medo que aconteça o pior - valor:5 </ol>
                            <ol>6. Atordoado (a) ou tonto (a) - valor:6  </ol>
                            <ol>7. Palpitação ou aceleração do coração - valor:7  </ol>
                            <ol>8. Sem equilíbrio/inseguro(a) - valor:8   </ol>
                            <ol>9. Aterrorizado (a) - valor:9</ol>
                            <ol>10. Nervoso (a) - valor:10 </ol>
                            <ol>11. Sensação de sufocação - valor:11  </ol>
                            <ol>12. Tremores nas mãos - valor:12 </ol>
                            <ol>13. Trêmulo (a) - valor:13 </ol>
                            <ol>14. Medo de perder o controle - valor:14  </ol>
                            <ol>15. Dificuldade de respirar - valor:15 </ol>
                            <ol>16. Medo de morrer - valor:16</ol>
                            <ol>17. Assustado (a) - valor:17  </ol>
                            <ol>18. Indigestão ou desconforto no abdômen - valor:18 </ol>
                            <ol>19. Sensação de desmaio  - valor:19  </ol>
                            <ol>20. Rosto afogueado (rubor facial)  - valor:20 </ol>
                            <ol>21. Suor (não devido ao calor)- valor:21 </ol>
                        </ol>
                    </TextMainP>
                    <TextMainP>
                        INTERPRETAÇÃO some seus resultados e análise conforme o gráfico a seguir.
                        <ul>
                            <li>0 a 10: dentro do limite mínimo (ansiedade mínima) </li>
                            <li>11 a 19: ansiedade leve  </li>
                            <li>20 a 30: ansiedade moderada </li>
                            <li>31 a 63: ansiedade grave</li>

                        </ul>
                    </TextMainP>
                </SecondContainer>
            </TextMain>


        </MainContainer>
    );
};

export default Main;