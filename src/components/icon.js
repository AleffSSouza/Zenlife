import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi'
import { BsFacebook } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 1%;
  padding-bottom: 1%;
  background-color: #0e2430;
  @media (max-width: 768px){
    gap: 5px;
    height: 30%;
}
`

function Icon (){
    return(
      <Icons>
        <a href="https://www.instagram.com/_zimmermatheus/" target="_blank" rel="noopener noreferrer">
        <BiLogoInstagram
          style={{
            color: '#FFF',
            width: "25px",
            height: "auto"
          }}
        />
      </a>
      
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <GrYoutube
        style={{
            color:'#FFF',
            width: "25px",
            height: "auto"
            }
          }
        />
      </a>

      <a href="https://pt-br.facebook.com/" target="_blank" rel="noopener noreferrer">
        <BsFacebook
          style={{
            color:'#FFF',
            width: "25px",
            height: "auto"
          }}
        />
      </a>
      </Icons>
    )
}
export default Icon


