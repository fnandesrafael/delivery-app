require('express-async-errors');
const cors = require('cors');
const express = require('express');
const loginRoute = require('../routes/login');
const registerRoute = require('../routes/register');
const productRoute = require('../routes/products');
const saleRoute = require('../routes/sales');
const { errorMiddleware } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());  
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productRoute);
app.use('/sales', saleRoute);
app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);
module.exports = app;
