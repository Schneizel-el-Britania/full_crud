const { Task } = require('../models');

module.exports.addTask = async (req, res, next) => {
  try {
    const { body } = req;
    const task = await Task.create(body);
    res.status(201).send({ data: task });
  } catch (error) {
    next(error);
  }
}

module.exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).send({ data: tasks });
  } catch (error) {
    next(error);
  }
}

module.exports.setIsDone = async (req, res, next) => {
  try {
    const { body, params: { taskId } } = req;
    const updatedTask = await Task.update(body, {
      where: { id: taskId },
      returning: true,
    });
    res.status(200).send({ data: updatedTask });
  } catch (error) {
    next(error);
  }
}