import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.section`
    padding: 1px;
    text-align: center;
    color: #BLACK;
    font-family: Asap;
    font-size: 80px;
    background-color: white;
    font-weight: bold;



    @media (max-width: 768px) {
        font-size: 12px;
        text-align:center;
        align-items: center;
        justify-content: center;
        font-weight: bold;

      }
    
`;

function QuoteSection(){
    return(
        <QuoteContainer>
            <blockquote>
                ONGs ODS 3

            </blockquote>
        </QuoteContainer>
    );
}

export default QuoteSection;