import fs from 'fs';
import path from 'path';
import { resolvers as scalarResolvers } from 'graphql-scalars';

let resolvers = [];
fs
  .readdirSync(__dirname)
  .filter((fileName) => /resolver.js$/.test(fileName))
  .forEach((fileName) => {
    const resolver = require(path.join(__dirname, fileName));

    resolvers = [
      ...resolvers,
      ...Array.from(scalarResolvers),
      resolver.default,
    ];
  });

export default resolvers;
