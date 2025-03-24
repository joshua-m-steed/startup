const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('FGC');

(async function testConnection() {
    try {
        await db.command({ ping: 1});
        console.log(`Connected to Database`);
    }
    catch (ex) {
        console.log(`Unable to connect to Database with ${url} because ${ex.message}`);
        process.exit(1);
    }
})();
