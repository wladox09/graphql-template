const { getBooksUseCase } = require("./Application/getBooksUseCase");
const { createBookUseCase } = require("./Application/createBookUseCase");
const { getAuthorsObjectIdUseCase } = require("../authors/Application/getAuthorsObjectIdUseCase");

const mongoDbBook = require("./Repositories/MongoDb");
const mongoDbAuthor = require("../authors/Repositories/MongoDb");

const resolvers = {
  Query: {
    books: () => getBooksUseCase(mongoDbBook),
  },
  Mutation: {
    createBook: async (root, args) => {
      args.author = await getAuthorsObjectIdUseCase(mongoDbAuthor, args.author);
      return createBookUseCase(args, mongoDbBook);
    }
  }
};

module.exports = {
  resolvers
}
