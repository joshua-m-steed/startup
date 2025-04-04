const cookieParser = require('cookie-parser');
const express = require('express');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const DB = require('./database.js');
const app = express();

const authCookieName = 'token';

const port = process.argv > 2 ? process.argv[2] : 4000;

// Score and User libraries
// let userGuess = {};
// let answerGuess = {};
let userScore = 0;

// TEMP NODE KEYS
// <-> Swampping to Frontend
// /// Error handling
// --- Benchmark location
// OOO Success with something
// XXX Concluding


// Declaring parsing and hosting static content
app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

// "Err", professional error catchers
app.use(function ( err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});


// Router
var apiRouter = express.Router();
app.use('/api', apiRouter);

// Login current user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('name', req.body.name)
    if (user)
    {
        if(await bcrypt.compare(req.body.password, user.password) && req.body.email == user.email) 
        {
            user.token = uuid.v4();
            await DB.updateUser(user);
            setCookie(res, user.token);
            res.send({ name: user.name});
            return;
        }
    }

    res.status(401).send({ msg: 'Unauthorized' });
});

// Creates new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('name', req.body.name)) {

        res.status(409).send({ msg: 'User already exists' });
    } else {
        const user = await createUser(req.body.name, req.body.email, req.body.password);

        setCookie(res, user.token);
        res.send({ name: user.name});
    }
});

// Deletes / Logout User
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if(user)
    {
        delete user.token;
        await DB.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Checks if user has token
const isAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if(user)
    {
        next();
    }
    else
    {
        res.status(401).send({ msg: "Sorry, you're not authorized!"});
    }
}

// Updates scores
apiRouter.post(`/scores`, isAuth, async (req, res) => {

    let scores = await updateScores(req.body);
    userScore = req.body.score;

    res.send(scores);
})

// Fetches scores
apiRouter.get(`/scores`, isAuth, async (_req, res) => {
    const scores = await DB.getTopScores();

    res.send([scores, userScore]);
});

apiRouter.post(`/guess`, isAuth, async (req, res) => {
    const userGuess = await DB.saveGuess(req.body);

    res.send(userGuess);
});

apiRouter.get(`/guess/:username`, isAuth, async (req, res) => {
    const userGuess = await DB.getGuess(req.params.username);

    res.send(userGuess);
});

apiRouter.delete(`/guess/:username`, isAuth, async (req, res) => {
    DB.deleteGuess(req.params.username);
    
    res.status(204).end();
})

apiRouter.post(`/answer`, isAuth, async (req, res) => {
    const answerKey = await DB.saveAnswer(req.body);

    res.send(answerKey);
});

apiRouter.get(`/answer`, isAuth, async (_req, res) => {
    const answerKey = await DB.getAnswer();

    res.send(answerKey);
});

apiRouter.delete(`/answer`, isAuth, async (_req, res) => {
    DB.deleteAnswer();
    
    res.status(204).end();
})

async function findUser(field, value) {
    if (!value) return null;

    if (field === 'token') {
        return DB.getUserByToken(value);
    }

    return DB.getUser(value);
}

async function createUser(name, email, password) {
    passwordHashed = await bcrypt.hash(password, 10);

    const user = {
        name: name,
        email: email,
        password: passwordHashed,
        token: uuid.v4()
    };
    await DB.addUser(user);

    return user;
}

function setCookie(response, authToken)
{
    response.cookie(authCookieName, authToken,
    {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

async function updateScores(newScore) {

    const TEST = await DB.getTopScores();
    let inTable = false;

    for(let i = 0; i < TEST.length; i++)
    {
        if(TEST[i].name === newScore.name)
        {
            inTable = true;
            continue;
        }
    }

    if(inTable)
    {
        await DB.updateScore(newScore);
    }
    else
    {
        await DB.addScore(newScore);
    }

    return await DB.getTopScores();

    // ADJUST TEST variable from original. 
    // ALSO, make "full inventory score" to compare against everything!
}


// Catch to default if lost
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Ears are open O.O
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});