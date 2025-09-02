const express = require('express');
const router = express.Router();
const db = require('../config/db');

//localhost:3000/usuarios
//ROTA GET  - retorna todos os usuarios
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id, nome, email FROM usuario");
        res.json(rows); //retorna a consulta da query
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({erro: "Erro ao buscar usuários"})
    }
});

module.exports = router;