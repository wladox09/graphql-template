const { gql } = require("apollo-server");

const typeDef = gql`
  type Author {
    id: String
    name: String
  }

  extend type Query {
    authors: [Author]
  }

  type Mutation {
    createAuthor(name: String!): Author
  }
`;

module.exports = {
  typeDef
};