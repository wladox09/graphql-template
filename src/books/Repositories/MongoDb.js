const MongoDbBase = require('../../core/Repositories/MongoDbBase');

class MongoDb extends MongoDbBase {
    constructor() {
        super();
        this.schema = this.mongoose.Schema({
            id: 'string',
            title: 'string',
            author: [{ type: this.mongoose.Schema.Types.ObjectId, ref: 'Author' }]
        });
        this.Book = this.mongoose.model('Book', this.schema);
    }

    async getBooks() {
        let books = await this.Book.find({}).populate('author');
        return books;
    }

    async getBookId(id) {
        let book = await this.Book.findOne({id}).populate('author');
        return book;
    }

    async createBook(book) {
        await this.Book.create(book);
        let response = await this.getBookId(book.id);
        return response;
    }
}

const mongoDb = new MongoDb();

module.exports = mongoDb