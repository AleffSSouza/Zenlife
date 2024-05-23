import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Depoimentos from './pages/Depoimentos'
import Intuitos from './pages/Intuitos'
import Contato from './pages/Contato'
import Bio from './pages/Bio'
import Cadastro from './pages/Cadastro'
import GlobalStyles from './styles/GlobalStyle'

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/depoimentos" element={<Depoimentos />}/>
        <Route path="/intuitos" element={<Intuitos />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/bio/:id" element={<Bio />}/>
        <Route path="/cadastro" element={<Cadastro />}/>

      </Routes>
    </Router>
  );
}

export default App;
