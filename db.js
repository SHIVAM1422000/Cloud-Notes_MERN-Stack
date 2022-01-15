
  // mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
const mongoose = require('mongoose');
// const mongo_url='mongodb://localhost:27017/internProject?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
const url="mongodb+srv://mern:mern@cluster0.hfsho.mongodb.net/userdata?retryWrites=true&w=majority"
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true 
async function connectToMongo() {
    await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Connected to Mongoose Successfully");
  }

  module.exports=connectToMongo;