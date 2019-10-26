import accountService from '@/services/account.service';

const typeDefs = `
  type Account {
    id: ID!
    username: String!
    role: String!
    createdAt: String
    updatedAt: String
  }
  type AccountLogin {
    token: String!
    account: Account
  }
  type Query {
    login(username: String!, password: String): AccountLogin
  }
  type Mutation {
    register(username: String!, password: String!, role: String): Account
  }
`;

const resolvers = {
  Query: {
    login(_, args) {
      return accountService.login(args);
    },
  },
  Mutation: {
    register(_, args) {
      return accountService.register(args);
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
