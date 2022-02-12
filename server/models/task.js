'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) { }
  }
  Task.init({
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDone: {
      field: 'is_done',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false,
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    underscored:true
  });
  return Task;
};