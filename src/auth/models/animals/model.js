'use strict';

const animalModel = (sequelize, DataTypes) => sequelize.define('Animals', {
  name: { type: DataTypes.STRING, required: true },
  color: { type: DataTypes.STRING, required: true },
  size: { type: DataTypes.STRING, required: true },
});

module.exports = animalModel;
