const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./src/routes/main.routes');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);


app.listen(3000, () => {
    console.log('Meu servidor está funcionando');
});
