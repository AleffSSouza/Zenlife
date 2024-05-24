import React, { useState, useRef } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 50vh;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #041d25;
  color: #fff;
  border: 1px solid #333;
  top: 10%;
  left: 37%;
  @media screen and (max-width: 768px) {
    top: 10%;
    left: 2%;
    }
  
`;

const Input = styled.input`
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;

`;

const Textarea = styled.textarea`
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
  resize: vertical;
`;

const FileInput = styled.input`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
  background-color: #00bfff;

  &:hover {
    background-color: #00bfff96;
  }
`;

const Hr = styled.hr`
  border: 1px solid #333;
  margin: 20px 0;
`;

function DepoimentoForm({ fetchDepoimentos }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const MAX_DESC_LENGTH = 500;
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('texto', descricao);
    formData.append('foto', imagem);

    try {
      await axios.post('http://localhost:5000/api/depoimentos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setNome('');
      setDescricao('');
      setImagem(null);
      setFileInputKey(Date.now());
      // fetchDepoimentos();
    } catch (error) {
      console.error('Erro ao enviar o depoimento', error);
    }
  };

  const handleImageChange = (event) => {
    setImagem(event.target.files[0]);
  };

  const handleDescricaoChange = (e) => {
    const texto = e.target.value;
    if (texto.length <= MAX_DESC_LENGTH) {
      setDescricao(texto);
    }
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Titulo do depoimento"
        required
      />
      <br /><br />
      <Textarea
        value={descricao}
        onChange={handleDescricaoChange}
        placeholder="Descrição do depoimentos"
        required
      />
      <div>{MAX_DESC_LENGTH - descricao.length} caracteres restantes</div>
      <br /><br />
      <FileInput
        type="file"
        key={fileInputKey}
        onChange={handleImageChange}
        required
      />
      <br /><br />
      <Button type="submit">Cadastrar</Button>
      <br /><br />
      <Hr />
      <br /><br />
    </Form>
  );
}

export default DepoimentoForm;