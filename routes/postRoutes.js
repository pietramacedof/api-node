const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/tarefas', postController.listarTarefas);
router.post('/tarefas', postController.criarTarefa);
router.put('/tarefas/:id', postController.atualizarTarefa);
router.delete('/tarefas/:id', postController.excluirTarefa);

module.exports = router;