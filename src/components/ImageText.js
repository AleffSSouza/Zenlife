import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ;
    margin-top: ;
    padding-bottom: 1.4em;
    background-color: #d1eaee;
`;

const ImageContainer = styled.div`
    width: 400px;
    height: 300px;
    margin: 100px;
    img{
        width:100%;
        height:100%;
        border-radius: 5px;
        object-fit: cover;
    }
`;

const Text = styled.p`
    text-align: center;
    margin: 10px 0;
    color: #BLACK;
    text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.50);
    font-family: Asap;
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 24px;
      text-align:center;
      align-items: center;
      justify-content: center;
`;

const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #004B9C;  
    }
`;

function ImageText({images}){
    return(
        <Container>
            {images.map((image, index) => (
            <ImageContainer key={index}>
                <img src={image.src} alt={image.alt} />
                <Text>{image.text}</Text>
                <Button>Saiba Mais</Button>
            </ImageContainer>
            ))}
        </Container>
    );
}

export default ImageText;