const { v4: uuidv4 } = require('uuid');

function createAuthorUseCase(author, respository) {
    author.id = uuidv4();
    return respository.createAuthors(author);
}

module.exports = {
    createAuthorUseCase
};