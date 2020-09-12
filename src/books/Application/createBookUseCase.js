const { v4: uuidv4 } = require('uuid');

function createBookUseCase(book, respository) {
    book.id = uuidv4();
    return respository.createBook(book);
}

module.exports = {
    createBookUseCase
};