import path from 'path';
import signale from 'signale';
import { migrateDB } from './components/utils';
import sequelize from './models';
import app from './app';

const pathToMigration = path.join(__dirname, 'migrations');

const main = async () => {
  await migrateDB(sequelize, pathToMigration).catch((e) => signale.watch(e));
  app();
};

main();
