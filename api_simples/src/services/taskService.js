const express = require('express') //  Cria uma constante que recebe o express.

let tasks = [
{ id: 1, title: "Estudar apis", done: false},
{ id: 2, title: "Praticar Docker", done: true},
{ id: 3, title: "Ronal", done: false},
] // Array de tarefas, com objetos.

// Regras: de negocio:
// O título é obrigatório
// N pode haver titulo duplicado
// Só é possível concluir uma tarefa se ela existir
// N é permitido atualizar ou excluir uma tarefa inexistente
// N é permitido excluir uma tarefa concluída

const getAll = () => tasks; // constante para pegar todas as tarefas.

const getById = (id) => {
    // variável para buscar uma tarefa no array específica pelo id.

    const task = tasks.find(t => t.id === id) // cria uma constante que entra no array tasks e percorre o array aplicando uma função, cada item percorrido é o representado por "t", a função no caso é verificar se o id da tarefa é o estritamente igual ao id que está sendo requisitado.

    if (!task) throw { status: 404, message: "Tarefa não encontrada"
    } //se ele não e ncontrar, ele faz o tratamento de erro, com o status 404 - não encontrado.

    return task // se ele encontrar, ele retorna a tarefa que está sendo pedida
}

const update = (id, {title, done}) => {
    // arrow function que recebe o id e o objeto que contém dois elementos "title e done", com a finalidade de atuallizar uma tarefa.

    const task = getById(id); // aqui ele recebe a tarefa que está sendo pedida.

    if(title){
        //se title...
        const exists = task.some(
            //para verificar se pelo menos um elemento do array satisfaz uma condição específica definida numa função de callback.
            //ou seja, criamos a constante exists para armazenar o valor de algum elemento que existe (se ele existir)

            t => t.title.toLowerCase() === title.toLowerCase() && t.id !== id
            

        );

        if(exists)
            throw {status: 400, message: "Já existe outra tarefa com este título."}
    
        task.title = title;
}
    
        if(done !== undefined) {
            if(typeof done !== "boolean")
                throw {status: 400, message: "O campo done deve ser 'true' ou 'false'"}
            task.done = done;
        }
    }

const create = (title) => {
    if(!title)
        throw {status: 400, messag: "O campo 'title' é obrigatório."}

    const exists = tasks.some(
        t.title.toLowerCase() === title.toLowerCase()
    )

    if(exists)
        throw {status: 400, message: "Já existe uma tarefa com este título"}

    const newTask = {id: tasks.lenght + 1, title, done: false}
    tasks.push(newTask)
    return newTask;
}

const del = (id) => {
    const taskIndex = tasks.findIndex(t=>t.id === id)
    if(taskIndex === -1)
        throw {status: 404, message: "Tarefa não encontrada"}
    if(tasks[taskIndex].done){
        throw {status: 400, message: "Não é permitido excluir uma tarefa concluida."}
    }

    const deleted = tasks.splice(taskIndex,1)[0]
    return deleted;
}


module.exports = { getAll, getById, del, create, update}