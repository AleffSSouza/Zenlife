import styled from 'styled-components'
import ImagemDireita from '../assets/Logo.png'

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 20px;
    max-width: 1000px;
    margin: auto;
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

function ContactPage() {
    return (
        <ContactContainer>
            <FormContainer>
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