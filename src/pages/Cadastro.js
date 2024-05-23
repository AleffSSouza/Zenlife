import React, {useState} from 'react'
import DepoimentoForm from '../components/DepoimentoForm'
import DepoimentoList from '../components/DepoimentoList'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'



function CadastroPage(){
    const [refresh, setRefresh] = useState(false)
    return(
        <div>
            <Header />
            {/* <Banner /> */}
            <h1>Cadastro de depoimentos</h1>
            <DepoimentoForm setRefresh={setRefresh}/>
            <h1>Depoimentos Cadastrados</h1>
            <DepoimentoList refresh={refresh} setRefresh={setRefresh}/>
            <Footer/>
        </div>
    )
}

export default CadastroPage