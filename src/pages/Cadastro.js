import React, {useState} from 'react'
import DepoimentoForm from '../components/DepoimentoForm'
import DepoimentoList from '../components/DepoimentoList'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import styled from "styled-components";


const Titulo = styled.h1`
color: #BLACK;
font-family: Blippo, fantasy;
font-size: 50px;
text-align: center;`

function CadastroPage(){
    const [refresh, setRefresh] = useState(false)
    return(
        <div>
            <Header />
            {/* <Banner /> */}
            <Titulo>Cadastro de depoimentos</Titulo>
            <DepoimentoForm setRefresh={setRefresh}/>
            <Titulo>Depoimentos Cadastrados</Titulo>
            <DepoimentoList refresh={refresh} setRefresh={setRefresh}/>
            <Footer/>
        </div>
    )
}

export default CadastroPage