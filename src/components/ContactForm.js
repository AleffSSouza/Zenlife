import styled from 'styled-components'
import ImagemDireita from '../assets/logosemfundo.png'

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 90px 20px;
    max-width: 1000px;
    margin: auto;
    background-color:#376097;
    margin-bottom: 5rem;
    margin-Top: 5rem;
    border-radius:20px;

`

const FormContainer = styled.div`
    text-align: center;
    flex: 3;//
    max-width: 900px;
    margin: 0 auto;

`

const ImageContainer = styled.div`
    display: flex;
    padding-top: 4rem;
    padding-right: 50rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    border-radius: 10px;
`
const SearchInput = styled(Input)`
    width: 100%;
    margin: 0 auto 20px auto;
`
const Button = styled.button`

    padding: 1rem 2rem;
    font-weight: 700;
    background-color: #black;
    color: black;
    border-radius: .5rem;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transition-duration: 1s;
    transition-property: border-top, 
       border-left, 
       border-bottom,
       border-right,
       box-shadow;
   
   
   button:hover 
   border-top: 2px solid rgb(6, 221, 250);
   border-left: 2px solid rgb(255, 255, 255);
   border-bottom: 2px solid rgb(255, 255, 255);
   border-right: 2px solid rgb(255, 255, 255);
   box-shadow: rgba(30, 158, 218, 0.4) 5px 5px, rgba(0, 189, 247, 0.3) 10px 10px, rgba(1, 242, 250, 0.2) 15px 15px;
`

const ContatoH1 = styled.h1`
position: relative;
text-align: center;
font-size: 3rem; 
font-weight: bold;
font-family: Asap;
`

function ContactPage() {
    return (
        <ContactContainer>
            <FormContainer>
            <ContatoH1>Contato</ContatoH1>
                <Form>
                    <SearchInput type="text" placeholder="Nome" />
                    <SearchInput type="email" placeholder="E-mail" />
                    <SearchInput type="text" placeholder="Assunto" />
                    <SearchInput type="text" placeholder="Celular" />
                    <SearchInput type="textarea" placeholder="Mensagem" />
                    <Button type="submit">Enviar</Button>
                </Form>
                {<ImageContainer>
                            <img src={ImagemDireita} alt="Descrição da Imagem" />
                        </ImageContainer> }
            </FormContainer>
        </ContactContainer>
    )
}

export default ContactPage