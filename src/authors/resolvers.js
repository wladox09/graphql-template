const { getAuthorsUseCase } = require("./Application/getAuthorsUseCase");
const { createAuthorUseCase } = require("./Application/createAuthorUseCase");
const mongoDb = require("./Repositories/MongoDb");

const resolvers = {
  Query: {
    authors: () => getAuthorsUseCase(mongoDb),
  },
  Mutation: {
    createAuthor: (root, args) => {
      return createAuthorUseCase(args, mongoDb);
    }
  }
};

module.exports = {
  resolvers
}
