const cookieParser = require('cookie-parser');
const express = require('express');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

const app = express();

const authCookieName = 'token';

const port = process.argv > 2 ? process.argv[2] : 4000;

// Score and User libraries
let users = [];
let scores = [];

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
        if(await bcrypt.compare(req.body.password, user.password)) 
        {
            console.log('OOO FOUND YOU');
            user.token = uuid.v4();
            setCookie(res, user.token);
            res.send({ name: user.name});
            console.log("<-> Moving to INDEX JSX...");
            return;
        }
    }
    console.log("/// Couldn't log you in lol");
    res.status(401).send({ msg: 'Unauthorized' });
})

// Creates new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('name', req.body.name)) {
        console.log("/// Couldn't create user, already exists");
        res.status(409).send({ msg: 'User already exists' });
    } else {
        console.log("OOO We did it! You have an account now!")
        const user = await createUser(req.body.name, req.body.email, req.body.password);

        setCookie(res, user.token);
        res.send({ name: user.name});
    }

    console.log("<-> Moving to INDEX JSX...");
})

async function findUser(field, value) {
    console.log("--- Searching...");
    if(!value) { return null };

    return users.find((u) => u[field] === value);
}

async function createUser(name, email, password) {
    console.log("--- Data collected: Creating...");
    passwordHashed = await bcrypt.hash(password, 10);

    console.log(`---  I got some hashbrowns for you! It looks like ${passwordHashed}`);

    const user = {
        name: name,
        email: email,
        password: passwordHashed,
        token: uuid.v4()
    }

    users.push(user);

    console.log(`$$$ Add to Cart: Here's your inventory -> ${JSON.stringify(users)}`);

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

// Catch to default if lost
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Ears are open O.O
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});