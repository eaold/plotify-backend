const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const {urlencoded, json} = require('body-parser');
const cors = require('cors');

const LoginRouter = require('./auth/login');
const CallbackRouter = require('./auth/callback');


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended: true}));

app.use('/login', LoginRouter);
app.use('/callback', CallbackRouter);


app.get('/', (req, res) => {
    res.send(`<h1>Plotify Backend</h1>`);
});

const connect = (url) => {
    return mongoose.connect(url);
};

connect('mongodb://localhost:27017/plotify')
.then(() => {
    app.listen(5000, () => {
        console.log('Listening on port 5000')
    })
})
.catch((err) => console.error(err));