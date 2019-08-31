import userService from '@/services/user.service';

const typeDefs = `
  type Query {
    users: [User!]!
    user(id: ID!): User
  }
  type Mutation {
    createUser(email: String, name: String!): User
    updateUser(id: ID!, email: String, name: String!): User
    deleteUser(id: ID!): User
  }
  type User {
    id: ID!
    email: String
    name: String!
  }
`;

const resolvers = {
  Query: {
    users() {
      return userService.getUsers();
    },
    user(_, args) {
      return userService.getUser(args.id);
    }
  },
  Mutation: {
    createUser(_, args) {
      return userService.createUser(args);
    },
    updateUser(_, args) {
      const { id, name, email } = args;
      return userService.updateUser(id, { name, email });
    },
    deleteUser(_, args) {
      return userService.deleteUser(args.id);
    }
  }
};

export default {
  typeDefs,
  resolvers
};
