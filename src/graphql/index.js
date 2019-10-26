import { makeExecutableSchema } from 'graphql-tools';
import accountGraphql from './account.graphql';
import userGraphql from './user.graphql';

const schema = makeExecutableSchema({
  typeDefs: [accountGraphql.typeDefs, userGraphql.typeDefs],
  resolvers: [accountGraphql.resolvers, userGraphql.resolvers],
});

export default schema;
