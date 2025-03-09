const cookieParser = require('cookie-parser');
const express = require('express');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

const app = express();

const authCookieName = 'token';

const port = process.argv > 2 ? process.argv[2] : 4000;

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

// Ears are open O.O
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});