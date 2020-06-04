import fs from 'fs';
import path from 'path';
import { values } from 'lodash';
import { resolvers as scalarResolvers } from 'graphql-scalars';

let resolvers = [...values(scalarResolvers)];
fs
  .readdirSync(__dirname)
  .filter((fileName) => /resolver.js$/.test(fileName))
  .forEach((fileName) => {
    const resolver = require(path.join(__dirname, fileName));

    resolvers = [
      ...resolvers,
      resolver.default,
    ];
  });

export default resolvers;
