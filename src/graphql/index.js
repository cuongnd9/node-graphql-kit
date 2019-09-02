import { makeExecutableSchema } from 'graphql-tools';
import userGraphql from './user.graphql';

const schema = makeExecutableSchema({
  typeDefs: [userGraphql.typeDefs],
  resolvers: [userGraphql.resolvers],
});

export default schema;
