"use strict";

const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = 4999;

const jsonPath = path.join(path.resolve(__dirname), 'searchData.json');
const searchData = JSON.parse(fs.readFileSync(jsonPath));

const app = express();

app.get(
    '/v1/search',
    (req, res) => {
        res.json(searchData);
    },
);

app.listen(PORT);
