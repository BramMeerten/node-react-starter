import {Application} from 'express';

const express = require('express');

const BASE_PATH = '/api';
const PORT = 8080;
const app: Application = express();

app.get(`${BASE_PATH}/hello`, (req: any, res: any) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
