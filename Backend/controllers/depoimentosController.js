const db = require('../db')

exports.createDepoimento = async(req, res) =>{
    
    //console.log(req.body)
    //console.log(req.file)

    const {nome, texto} = req.body
    const foto = req.file.filename //path
    try{
        const [result] = await db.query('INSERT INTO Depoimentos (nome, texto, foto) VALUES (?, ?, ?)', [nome, texto, foto])
        res.status(201).send(`Depoimento criado com o ID: ${result.insertId}`)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.getAllDepoimento = async(req, res) =>{
    try{
        const [depoimentos] =  await db.query('SELECT * FROM depoimentos')
        res.status(200).json(depoimentos)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.getDepoimentoById = async(req, res) =>{
    const id = req.params.id
    try{
        const [depoimento] = await db.query('SELECT * FROM depoimentos WHERE id = ?', [id])
        if(depoimento.length > 0){
            res.status(200).json(depoimento[0])
        }else{
            res.status(404).send('depoimento não Encontrado')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.updateDepoimento = async(req, res) =>{
    const id = req.params.id
    const {nome, texto} = req.body
    const foto = req.file ? req.file.filename : null
    try{
        const fields = []
        const values = []
        if(nome){
            fields.push('nome = ?')
            values.push(nome)
        }
        if(texto){
            fields.push('texto = ?')
            values.push(texto)
        }
        if(foto){
            fields.push('foto = ?')
            values.push(foto)
        }
        if(fields.length === 0){
            return res.status(400).send('Nenhum campo para atualizar')
        }
        values.push(id)
        const query = `UPDATE depoimentos SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await db.query(query, values)
        if(result.affectedRows > 0){
            res.status(200).send('Foi atualizado!')
        } else {
            res.status(404).send('Não foi possível atualizar')
        }
    } catch (err){
        console.error('Erro ao atualizar o depoimento', err)
        res.status(500).sen(err.message)
    }
}

exports.deleteDepoimento = async(req, res) =>{
    const id = req.params.id
    try{
        const[result] = await db.query('DELETE FROM depoimentos WHERE id = ?', [id])
        if(result.affectedRows > 0){
            res.status(200).send('Depoimento deletado com sucesso')
        } else {
            res.status(404).send('Depoimento não encontrado')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}