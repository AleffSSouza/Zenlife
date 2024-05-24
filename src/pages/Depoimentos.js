import React, { useEffect, useState } from 'react'
import axios from  'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerDep from '../components/BannerDep'
import DepoimentosCard from '../components/DepoimentoCard'
import Depoimentos from '../components/Depoimentos'


function Persona(){
    const [characters, setCharacters] = useState([])

    useEffect(() =>{
        const fetchCharacters = async () =>{
            try{
                const response = await axios.get('http://localhost:5000/api/depoimentos')
                setCharacters(response.data)
            } catch (error){
                console.error('Erro ao buscar o depoimento', error)
            }
        }

        fetchCharacters()
    }, [])
    return(
        <div>
            <Header/>
            <BannerDep />
            <Depoimentos/>
            <DepoimentosCard characters={characters}/>         
            <Footer/>
        </div>
    );
}
export default Persona