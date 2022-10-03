'use strict';

const cetaceanModel = (sequelize, DataTypes) => sequelize.define('Cetacean', {
  name: { type: DataTypes.STRING, required: true },
  size: { type: DataTypes.STRING, required: true },
  type: { type: DataTypes.ENUM('whale', 'dolphin', 'porpoises'), required: true },
});

module.exports = cetaceanModel;
