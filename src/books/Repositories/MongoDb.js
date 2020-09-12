const MongoDbBase = require('../../core/Repositories/MongoDbBase');

class MongoDb extends MongoDbBase {
    constructor() {
        super();
        this.schema = this.mongoose.Schema({
            _id: this.mongoose.Schema.Types.ObjectId,
            title: 'string',
            author: { type: this.mongoose.Schema.Types.ObjectId, ref: 'Author' }
        });
        this.Book = this.mongoose.model('Book', this.schema);
    }

    async getBooks() {
        let books = await this.Book.find({});
        return books;
    }
}

const mongoDb = new MongoDb();

module.exports = mongoDb