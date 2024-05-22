import styled from 'styled-components'
import ImagemDireita from '../assets/img2.png'

const infoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 20px;
    max-width: 1000px;
    margin: auto;
`

const FormContainer = styled.div`
    text-align: center;
    flex: 3;//
    max-width: 1000px;
    margin: 0 auto;

`

const ImageContainer = styled.div`
    display: flex;
    flex: 2;//
    img{
        width: 300px;
        height: 400px;
        object-fit: cover;
        border-radius: 5px;
    }
`
const Form = styled.form`

`

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
`
const SearchInput = styled(Input)`
    width: 50%;
    margin: 0 auto 20px auto;
`
const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #394c73;
    }
`

function infoPage(){
    return(
            <infoContainer>  
                        <ImageContainer>
                        
                            <img src={ImagemDireita} alt="Descrição da Imagem" />
                        </ImageContainer>
            </infoContainer>
    )
}

export default infoPage