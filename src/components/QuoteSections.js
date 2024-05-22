import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.section`
    padding: 20px;
    text-align: center;
    color: #BLACK;
    font-family: Asap;
    font-size: 40px;
    background-color: #d1eaee;
    margin-top: 10rem ;


    @media (max-width: 768px) {
        font-size: 12px;
        text-align:center;
        align-items: center;
        justify-content: center;
      }
    
`;

function QuoteSection(){
    return(
        <QuoteContainer>
            <blockquote>
                ONGS PARCEIRAS
            </blockquote>
        </QuoteContainer>
    );
}

export default QuoteSection;