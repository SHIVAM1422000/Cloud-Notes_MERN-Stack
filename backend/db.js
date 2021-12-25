// mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
const mongoose = require('mongoose');
const mongo_url='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

async function connectToMongo() {
    await mongoose.connect(mongo_url);
    console.log("Connected to Mongoose Successfully");
  }

  module.exports=connectToMongo;
