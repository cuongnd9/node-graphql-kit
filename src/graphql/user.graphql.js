import userService from '@/services/user.service';

const typeDefs = `
  type User {
    id: ID!
    email: String
    name: String!
    phoneNumber: String
    address: String
    dob: String
    sex: String
    createdAt: String
    updatedAt: String
  }
  type Query {
    users: [User!]!
    user(id: ID!): User
  }
  type Mutation {
    createUser(email: String, name: String!): User
    updateUser(id: ID!, email: String, name: String!): User
    deleteUser(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    users() {
      return userService.getUsers();
    },
    user(_, args) {
      return userService.getUser(args.id);
    },
  },
  Mutation: {
    createUser(_, args) {
      return userService.createUser(args);
    },
    updateUser(_, args) {
      return userService.updateUser(args);
    },
    deleteUser(_, args) {
      return userService.deleteUser(args.id);
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
