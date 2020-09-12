const { ApolloServer, gql } = require("apollo-server");
const books = require("./books");
const authors = require("./authors");

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, books.typeDef, authors.typeDef],
  resolvers: [books.resolvers, authors.resolvers],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
