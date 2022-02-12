const {Router} = require('express');
const TaskController = require('../controllers/task.controller');

const taskRouter = Router();

taskRouter.post('/', TaskController.addTask);
taskRouter.get('/', TaskController.getTasks);
taskRouter.patch('/:taskId', TaskController.setIsDone);

module.exports = taskRouter;