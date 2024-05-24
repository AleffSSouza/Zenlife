import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MainTitle = styled.h1`
color: white;
font-family: Blippo, fantasy;
font-size: 60px;
text-align: center;
Background-color: #174e61;
;


`
const Container = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 40px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 100px;     
    
`
const ImageCard = styled.div`
    width: calc(33.333% - 20px);
    display: flex;
    flex-direction: column;
    align-items:center;
`
const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10%;
    border: 5px solid black;
    object-fit: cover;
    margin-bottom: 10px;
`
const SubTitle = styled.h2`
    color: black;
    text-align: center;
    margin: 0 0 5px 0;
`
const Description = styled.p`
    text-align: center;
    margin-bottom: 10px;
`
const Button = styled.button`
    width: 50%;
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

function DepoimentosCard({ characters }) {
    const navigate = useNavigate()

    const handleLearnMore = (id) => {
        navigate(`/bio/${id}`)
    }
    return (
        <div>
            <MainTitle>Depoimentos</MainTitle>
            <Container>
                {characters.map((character) => (
                    <ImageCard key={character.id}>
                        <StyledImage src={`http://localhost:5000/uploads/${character.foto}`} alt={character.nome} />
                        <SubTitle>{character.nome}</SubTitle>
                        <Button onClick={() => handleLearnMore(character.id)}>Saiba Mais</Button>
                    </ImageCard>
                ))}
            </Container>
        </div>
    )
}

export default DepoimentosCard