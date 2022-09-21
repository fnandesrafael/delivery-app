const express = require('express');
const loginRoute = require('../routes/login');
const { errorMiddleware } = require('../middlewares/errorMiddleware');
require('express-async-errors');

const app = express();
app.use(express.json());
app.use(errorMiddleware);
app.use('/login', loginRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
