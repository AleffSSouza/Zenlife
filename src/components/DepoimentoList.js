import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditDepoimentoModal from './EditDepoimentoModal'
import {
    ListContainer,
    DepoimentoCard,
    DepoimentoImage,
    DepoimentoInfo,
    DepoimentoNome,
    DepoimentoDescricao,
    Actions,
    ActionButton
} from '../styles/DepoimentosListStyle'

function DepoimentoList({refresh, setRefresh}) {
    const [depoimentos, setDepoimentos] = useState([])
    const [editDepoimento, setEditDepoimento] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchDepoimentos()
    }, [refresh])

    const fetchDepoimentos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/depoimentos')
            setDepoimentos(response.data)
        } catch (error) {
            console.error('erro ao buscar depoimentos', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/depoimentos/${id}`)
            fetchDepoimentos()
        } catch (error) {
            console.error('Erro ao deletar o depoimento', error)
        }
    }

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/depoimentos/${id}`)
            setEditDepoimento(response.data)
            setIsModalOpen(true)
        } catch (error) {
            console.error('Erro ao buscar o depoimento para edição', error)
        }
    }

    return (
        <ListContainer>
            {depoimentos.map((depoimento) => (
                <DepoimentoCard key={depoimento.id}>
                    <DepoimentoImage src={`http://localhost:5000/uploads/${depoimento.foto}`} alt={depoimento.nome} style={{ width: '100px' }} />
                    <DepoimentoInfo>
                        <DepoimentoNome>{depoimento.nome}</DepoimentoNome>
                        <DepoimentoDescricao>{depoimento.texto}</DepoimentoDescricao>
                        <Actions>
                            <ActionButton onClick={() => handleDelete(depoimento.id)}>Deletar</ActionButton>
                            <ActionButton onClick={() => handleEdit(depoimento.id)}>Editar</ActionButton>
                        </Actions>
                    </DepoimentoInfo>
                </DepoimentoCard>
            ))}
            {editDepoimento && (
                <EditDepoimentoModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    depoimento={editDepoimento}
                    setRefresh={setRefresh}
                    setEditDepoimento={setEditDepoimento}
                />
            )}
        </ListContainer>
    )
}
export default DepoimentoList