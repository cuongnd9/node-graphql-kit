import { GraphQLServer } from 'graphql-yoga';
import { makeExecutableSchema } from 'graphql-tools';
import signale from 'signale';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const app = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new GraphQLServer({ schema });

  server.start(() => signale.watch('Server is running on http://127.0.0.1:4000'));
};

export default app;
