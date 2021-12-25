const connectToMongo=require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Radhey Radhey')
  })

app.listen(port, () => {
    console.log(`Success: http://localhost:${port}`)
  })