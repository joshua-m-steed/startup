const cookiePareser = require('cookie-parser');
const express = require('express');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

const app = express();

const authCookieName = 'token';