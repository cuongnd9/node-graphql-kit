import Umzug from 'umzug';
import { get } from 'lodash';
import { BaseError, ValidationError } from 'sequelize';
import {
  AppError, DatabaseError, DatabaseValidationError,
} from './errors';

export const formatError = (error) => {
  let formattedError;
  const originalError = get(error, 'originalError');

  if (originalError instanceof ValidationError) {
    formattedError = new DatabaseValidationError(originalError.message);
  } else if (originalError instanceof BaseError) {
    formattedError = new DatabaseError(originalError.message);
  } else if (!get(originalError, 'extensions.code')) {
    formattedError = new AppError(error.message);
  } else {
    formattedError = error;
  }

  const {
    message, locations, path, extensions,
  } = formattedError;
  return {
    message,
    locations,
    path,
    extensions,
  };
};

export const migrateDB = (sequelize, path) => new Umzug({
  migrations: {
    path,
    pattern: /\.migration.js$/,
    params: [
      sequelize.getQueryInterface(),
      sequelize.constructor,
      () => {
        throw new Error(`Migration tried to use old style "done" callback.
          Please upgrade to "umzug" and return a promise instead.`);
      },
    ],
  },
  storage: 'sequelize',
  storageOptions: { sequelize },
}).up();
