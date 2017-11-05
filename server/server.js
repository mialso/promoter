"use strict";

const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = 4999;

const rootPath = path.resolve(__dirname, '../');

const jsonPath = path.join(path.resolve(__dirname), 'searchData.json');
const searchData = JSON.parse(fs.readFileSync(jsonPath));

const app = express();

app.use(express.static(path.resolve(rootPath, 'build')));

app.get(
    '/v1/search',
    (req, res) => {
        res.json(searchData);
    },
);

app.get(
    '*',
    (req, res) => {
        res.sendFile(path.resolve(rootPath, 'build', 'index.html'));
    },
);

app.listen(PORT);
