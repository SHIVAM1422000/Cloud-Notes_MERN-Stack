const connectToMongo=require('./db');
connectToMongo();
const express = require('express');
const app = express();
const port= process.env.PORT || 5000;
console.log(process.env.PORT);
//cors is a middle ware b/w frontend and backend to fetch data
var cors = require('cors');
app.use(cors());
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('This the backend part')
//   })

//This route handles user signup and login
app.use('/api/auth',require('./routes/auth'));

//This route handles the data of the user
app.use('/api/notes',require('./routes/notes'));




//For Deployment
if(process.env.NODE_ENV==='production'){
  app.use(express.static("Frontend/build"));
  const path=require("path");
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'Frontend',"buid","indexed.html"));
  });
}



app.listen(port, () => {
    console.log(`Serving On: http://localhost:${port}`)
  });


