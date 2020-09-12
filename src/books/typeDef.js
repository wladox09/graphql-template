const { gql } = require("apollo-server");

const typeDef = gql`
  type Book {
    title: String
    author: Author
  }

  extend type Query {
    books: [Book]
  }
`;

module.exports = {
  typeDef
};