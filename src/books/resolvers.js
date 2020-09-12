const { getBooksUseCase } = require("./Application/getBooksUseCase");
const mongoDb = require("./Repositories/MongoDb");

const resolvers = {
  Query: {
    books: () => getBooksUseCase(mongoDb),
  },
};

module.exports = {
  resolvers
}
