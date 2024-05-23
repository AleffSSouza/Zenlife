import styled from "styled-components";
import BackImage from "../assets/fundoprojetodep1.jpg"

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


function Banner(){
    return(
        <BannerContainer>
            <p>ZEN LIFE</p>
        </BannerContainer>
        
    );
}

export default Banner;