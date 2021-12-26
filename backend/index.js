const connectToMongo=require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Radhey Radhey')
  })

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.listen(port, () => {
    console.log(`Serving On: http://localhost:${port}`)
  });



  // http://localhost:5000/api/auth/create_user


  /** 
   
  {
    "name":"Ladli",
    "email":"radha86@gmail.com",
    "password":"shyam"
}

**/