import styled from "styled-components";
import BackImage from "../assets/fundoprojeto.png"

const BannerContainer = styled.div`
    background-image: url(${BackImage});
    height: 900px;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items:center;

    color: #BLACK;
    text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.50);
    font-family: Asap;
    font-size: 80px;
    @media (max-width: 768px) {
      font-size: 24px;
      text-align:center;
      align-items: center;
      justify-content: center;
`;


function Banner(){
    return(
        <BannerContainer>
            <p>ZEN LIFE</p>
        </BannerContainer>
        
    );
}

export default Banner;