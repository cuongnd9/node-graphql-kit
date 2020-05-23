import fs from 'fs';
import path from 'path';
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

let typeDefs = [];
fs
  .readdirSync(__dirname)
  .filter((fileName) => /typeDef.js$/.test(fileName))
  .forEach((fileName) => {
    const typeDef = require(path.join(__dirname, fileName));

    typeDefs = [
      ...typeDefs,
      ...scalarTypeDefs,
      typeDef.default,
    ];
  });

export default typeDefs;
