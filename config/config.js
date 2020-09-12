const fs = require('fs');

function config() {
    let rawdata = fs.readFileSync(`config/${process.env.NODE_ENV}.json`);
    return JSON.parse(rawdata);
}

module.exports = {
    config
};