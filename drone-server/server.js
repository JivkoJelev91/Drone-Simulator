const http = require('http')
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

const port = 9999;
app.use(bodyParser.json());
const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions))
http.createServer({}, app).listen(port)