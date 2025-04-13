const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('FGC');

const userCollection = db.collection('user');
const guessCollection = db.collection('guesses');
const scoreCollection = db.collection('score');
const answerCollection = db.collection('answer');

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
    return userCollection.findOne({ name: name });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({ name: user.name }, { $set: user });
}

async function saveGuess(guess) {
    console.log("I'm inside the save guess!");
    if(await guessCollection.findOne({ name: guess.name }))
    {
        await guessCollection.updateOne({ name: guess.name }, {$set: guess });
    }
    else
    {
        await guessCollection.insertOne(guess);
    }   
}

async function getGuess(name) {
    return guessCollection.findOne({ name: name });
}

async function getGuessAll() {
    console.log("Why hello there!");
    return guessCollection.find().toArray();
}

async function deleteGuess(name) {
    await guessCollection.deleteOne({ name: name });
}

async function saveAnswer(answer) {
    if(await answerCollection.findOne({ name: answer.name }))
        {
            await answerCollection.updateOne({ name: answer.name }, {$set: answer });
        }
        else
        {
            await answerCollection.insertOne(answer);
        }   
}

async function getAnswer() {
    return answerCollection.findOne({ name: "ANSWER" });
}

async function deleteAnswer() {
    await answerCollection.deleteOne({ name: "ANSWER"});
}

async function addScore(score) {
    await scoreCollection.insertOne(score);
}

async function updateScore(score) {
    await scoreCollection.updateOne({ name: score.name}, { $set: score });
}

async function getUserScores(name) {
    userData = await scoreCollection.findOne({ name: name });

    if(userData == null) {
        return 0;
    } else {
        return userData.score;
    }
    
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
    saveGuess,
    getGuess,
    getGuessAll,
    deleteGuess,
    saveAnswer,
    getAnswer,
    deleteAnswer,
    addScore,
    updateScore,
    getUserScores,
    getTopScores,
};