const { Task } = require('../models');

module.exports.addTask = async (req, res, next) => {
  try {
    const { body } = req;
    const task = await Task.create(body);
    res.status(201).send({ data: [task] });
  } catch (error) {
    next(error);
  }
}

module.exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ order: [['id', 'ASC']] });
    res.status(200).send({ data: tasks });
  } catch (error) {
    next(error);
  }
}

module.exports.setIsDone = async (req, res, next) => {
  try {
    const { params: { taskId } } = req;
    const taskInstance = await Task.findByPk(taskId);
    const updatedTask = await taskInstance.update({
      isDone: !taskInstance.isDone
    }, {
      where: { id: taskId },
      returning: true,
    });
    res.status(200).send({ data: [updatedTask] });
  } catch (error) {
    next(error);
  }
}