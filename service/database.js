const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('FGC');

const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

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

function getUser(name) {
    console.log("I've now getting USer")
    return userCollection.findOne({ name: name });
}

function getUserByToken(token) {
    console.log("Yep, Collecting...? prob null");
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    console.log("I'm here now");
    await userCollection.updateOne({ name: user.name }, { $set: user });
}

async function addScore(score) {
    console.log("--> Add Score");
    await scoreCollection.insertOne(score);
}

async function updateScore(score) {
    console.log("--> Update Score");
    await scoreCollection.updateOne({ name: score.name}, { $set: score });
}

function getTopScores() {
    const query = { score: { $lt: 100 } };
    const options = {
        sort: { score: -1 },
        limit: 10,
    };
    const point = scoreCollection.find(query, options);
    return point.toArray();
}


module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addScore,
    updateScore,
    getTopScores,
};