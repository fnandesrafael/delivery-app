require('express-async-errors');
const cors = require('cors');
const express = require('express');
const loginRoute = require('../routes/login');
const { errorMiddleware } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());  
app.use('/login', loginRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);
module.exports = app;
