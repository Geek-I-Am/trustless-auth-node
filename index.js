const bodyParser = require('body-parser');
const express = require('express');

const DEFAULT_PORT = process.env.DEFAULT_PORT || 8001;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(bodyParser.json())

app.listen(DEFAULT_PORT, HOST, err => {
    if (err) {
        return console.log(err);
    }
    console.log('\n\tStarting server...');
    console.log(`Running locally at ${HOST}:${DEFAULT_PORT}`);
});
