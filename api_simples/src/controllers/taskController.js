const taskService = require('../services/taskService')

const getAll = (req, res) => {
    const tasks = taskService.getAll()
    res.json(tasks)
}

const getById = (req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        const task = taskService.getById(id)
        res.json(task)
    } catch (error) {
        next(error)
    }
}

module.exports = {getAll, getById}