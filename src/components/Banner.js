import styled from "styled-components";
import BackImage from "../assets/fundoprojeto.png"

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

const titulo = styled.p`
color: #BLACK;
text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.50);
font-family: Asap;
font-size: 80px;

`


function Banner(){
    return(
        <BannerContainer>
            <titulo>Zen Life</titulo>
        </BannerContainer>
        
    );
}

export default Banner;