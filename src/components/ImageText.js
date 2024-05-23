import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 0rem;
padding-bottom: 13em;
background-color: #d1eaee;

@media (max-width: 768px) {
    flex-direction: column;
}
`;

const ImageContainer = styled.div`
width: 400px;
    height: 280px;
    margin: 1rem;
    padding: 10rem 3rem;

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
        border-radius: 60px;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;

    }
`;

const Text = styled.p`
    text-align: center;
    margin: 10px 0;
    color: #BLACK;
    font-family: Asap;
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 24px;
      text-align:center;
      align-items: center;
      justify-content: center;
`;

const Button = styled.button`
margin-top: 20px;
transition: all 0.3s ease-in-out;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
padding-block: 1rem;
padding-inline: 1.25rem;
background-color: #136d58;
border-radius: 9999000px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
color: #ffff;
font-weight: bold;
border: 3px solid #ffffff4d;
outline: none;
overflow: hidden;
font-size: 15px;
text-decoration: none;
align-self: center;

@media (max-width: 768px) {
    margin-top: 1rem;

    }
`;



function ImageText({images}){
    return(
        <Container>
            {images.map((image, index) => (
            <ImageContainer key={index}>
                <img src={image.src} alt={image.alt} />
                <Text>{image.text}</Text>
                <Button as="a" href="https://www.example.com" >Saiba Mais</Button>

            </ImageContainer>
            ))}
        </Container>
    );
}

export default ImageText;