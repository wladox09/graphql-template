const { gql } = require("apollo-server");

const typeDef = gql`
  type Author {
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