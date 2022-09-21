const express = require('express');
require('express-async-errors');
const { errorMiddleware } = require('../middlewares/errorMiddleware');
const loginRoute = require('../routes/login');

const app = express();
app.use(errorMiddleware);
app.use(express.json());
app.use('/login', loginRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
