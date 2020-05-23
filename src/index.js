import path from 'path';
import signale from 'signale';
import { migrateDB } from './components/utils';
import sequelize from './models';
import app from './app';

const pathToMigration = path.join(__dirname, 'migrations');

migrateDB(sequelize, pathToMigration)
  .then(() => {
    app();
  })
  .catch((e) => signale.watch(e));
