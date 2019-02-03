const express = require('express');
const app = express();
const path = require('path');

app.use('/',express.static(path.join(__dirname,'..','build')));

const server = app.listen(3003);