import styled from "styled-components";
import BackImage from "../assets/depoimento.jpg"

const BannerContainer = styled.div`
    background-image: url(${BackImage});
    height: 100vh;
    width: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    
    @media screen and (max-width: 768px) {
    .background {
      height: 50vh;
    }
    }
`;

const Titulo = styled.p`
color: #fff;
text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.50);
font-family: Blippo, fantasy;
font-size: 100px;
`



function Banner() {
    return (
        <BannerContainer>
            <Titulo>Depoimentos</Titulo>
        </BannerContainer>

    );
}

export default Banner;