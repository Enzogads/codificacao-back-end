const express = require('express')

let tasks = [
{ id: 1, title: "Estudar apis", done: false},
{ id: 2, title: "Praticar Docker", done: true}
]

// Regras: de negocio:
// O título é obrigatório
// N pode haver titulo duplicado
// Só é possível concluir uma tarefa se ela existir
// N é permitido atualizar ou excluir uma tarefa inexistente
// N é permitido excluir uma tarefa concluída

const getAll = () => tasks;

const getById = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) throw { status: 404, message: "Tarefa não encontrada"
    }
    return task
}

module.exports = { getAll, getById }