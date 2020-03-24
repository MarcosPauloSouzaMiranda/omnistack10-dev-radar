const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect(
    'mongodb+srv://omnistack:omnistack@omnistack-ly89y.mongodb.net/omnistack10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(4000);