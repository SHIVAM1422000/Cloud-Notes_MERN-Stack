const connectToMongo=require('./db');
connectToMongo();
const express = require('express');
const app = express();
const port = 5000;

//cors is a middle ware b/w frontend and backend to fetch data
var cors = require('cors');
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Radhey Radhey')
  })

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.listen(port, () => {
    console.log(`Serving On: http://localhost:${port}`)
  });



 
