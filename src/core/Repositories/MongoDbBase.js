const mongoose = require('mongoose');
const { config } = require('../../../config/config');

module.exports = class MongoDbBase {
    constructor() {
        let env = config();
        this.mongoose = mongoose;
        mongoose.connect(env.URI, {useNewUrlParser: true, useUnifiedTopology: true}).then((con, err) => {
            if(err) throw err;
            console.log('Mongodb ok!');
        });
    }
}