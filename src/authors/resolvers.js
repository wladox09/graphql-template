const { getAuthorsUseCase } = require("./Application/getAuthorsUseCase");
const { createAuthorsUseCase } = require("./Application/createAuthorsUseCase");
const mongoDb = require("./Repositories/MongoDb");

const resolvers = {
  Query: {
    authors: () => getAuthorsUseCase(mongoDb),
  },
  Mutation: {
    createAuthor: (root, args) => createAuthorsUseCase(root, args, mongoDb),
  }
};

module.exports = {
  resolvers
}
