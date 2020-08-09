import path from 'path';
import { logger, globalOptions } from 'juno-js';

import { migrateDB } from './components/utils';
import db from './models';
import app from './app';
import config from './components/config';

globalOptions.environment = config.nodeEnv;

const main = async () => {
  const pathToMigration = path.join(__dirname, 'migrations');
  await migrateDB(db.sequelize, pathToMigration).catch(logger().error);
  app();
};

main().catch(logger().error);
