import path from 'path';
import fs from 'fs';
import { Sequelize, DataTypes } from 'sequelize'
import signale from 'signale'

import config from '../components/config'

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: config.pgUser,
  password: config.pgPassword,
  database: config.pgDB,
  host: config.pgHost,
  port: config.pgPort,
  logging: config.nodeEnv === 'development' ? console.log : false,
  define: {
    underscored: true,
  }
})

sequelize
  .authenticate()
  .catch(e => {
    signale.watch(e)
    process.exit(1)
  })

const models = {};

fs
  .readdirSync(__dirname)
  .filter((fileName) => /model.js$/.test(fileName))
  .forEach(fileName => {
    const model = require(path.resolve(__dirname, fileName));
    const formattedFileName = fileName.split('.')[0];
    const modelName = formattedFileName
      .replace(/^./, formattedFileName[0].toUpperCase());
    models[modelName] = model.default;
  });

Object.values(models)
  .forEach(model => model.init(sequelize, DataTypes));

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

const db = {
  sequelize,
  ...models,
};

export default db;
