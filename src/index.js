import 'dotenv/config';
import { GraphQLServer } from 'graphql-yoga';
import schema from './graphql';

// Initialize graphql server.
const server = new GraphQLServer({ schema });

// Graphql options.
const options = {
  port: process.env.PORT || 9000
};

// Start server.
server.start(options, () =>
  console.log(
    `Server is running on http://localhost:${options.port}`
  )
);
