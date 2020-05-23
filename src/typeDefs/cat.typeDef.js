const typeDef = `
  type Query {
    cats(id: String): [Cat]
  }

  type Mutation {
    createCat(name: String, color: String): Cat
  }

  type Cat {
    id: String
    name: String
    color: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

export default typeDef;
