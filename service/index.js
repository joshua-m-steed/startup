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

// Creates new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('name', req.body.name)) {
        console.log("/// Couldn't create user, already exists");
        res.status(409).send({ msg: 'User already exists' });
    } else {
        const user = await createUser(req.body.name, req.body.email, req.body.password);

        // setCookie(res, user.token);
        res.send({ name: user.name}); //WHY ARE WE SENDING THIS AGAIN?
    }

    console.log("<-> Moving to INDEX JSX...");
})

async function findUser(field, value) {
    console.log("--- Searching...");
    return;
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

// Catch to default if lost
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Ears are open O.O
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});