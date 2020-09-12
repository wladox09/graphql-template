const MongoDbBase = require('../../core/Repositories/MongoDbBase');

class MongoDb extends MongoDbBase {
    constructor() {
        super();
        this.schema = this.mongoose.Schema({
            id: 'string',
            name: 'string',
            books: [{ type: this.mongoose.Schema.Types.ObjectId, ref: 'Book' }],
        });
        this.Author = this.mongoose.model('Author', this.schema);
    }

    async getAuthors() {
        let authors = await this.Author.find({});
        return authors;
    }

    async createAuthors(author) {
        let response = await this.Author.create(author);
        return response;
    }

    async getAuthorsObjectId(authors) {
        let authorsObjectId = await this.Author.find({}).where('id').in(authors).select('_id');
        return authorsObjectId;
    }
}

const mongoDb = new MongoDb();

module.exports = mongoDb