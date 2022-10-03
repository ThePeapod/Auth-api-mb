'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');
const animalModel = require('./animals/model.js');
const Collection = require('./data-collection.js');
const cetaceanModel = require('./cetacean/model.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

const sequelize = new Sequelize(DATABASE_URL);
const animal = animalModel(sequelize, DataTypes);
const cetaceans = cetaceanModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  animal: new Collection(animal),
  cetaceans: new Collection(cetaceans),
};
