const { gql } = require("apollo-server");

const typeDef = gql`
  type Book {
    id: String
    title: String
    author: [Author]
  }

  extend type Query {
    books: [Book]
  }

  extend type Mutation {
    createBook(title: String!, author: [String!]!): Book
  }
`;

module.exports = {
  typeDef
};