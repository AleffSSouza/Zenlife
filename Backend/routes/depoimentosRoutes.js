const express = require('express')
const router = express.Router();
const depoimentosController = require('../controllers/depoimentosController')
const upload = require('../config/multerConfig')

router.post('/', upload.single('foto'), depoimentosController.createDepoimento)
router.put('/:id', upload.single('foto'), depoimentosController.updateDepoimento)
router.get('/', depoimentosController.getAllDepoimento)
router.get('/:id', depoimentosController.getDepoimentoById)
router.delete('/:id', depoimentosController.deleteDepoimento)

module.exports = router