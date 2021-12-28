const mongoose=require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({

  //here we link the user id with the  notes id to get all the data related to an user at a place
  //reference is same as of the name of the User model in the export line ie: line 11 of models/user.js
  user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
  title:{type:String , required:true},
  description:{type:String , required:true},
  tag:{type:String , default:"General"},
  date:{type:String , default:Date.now}
});

module.exports = mongoose.model('notes', NotesSchema);
// const user=mongoose.model('user', UserSchema);
// user.createIndexes();
// module.exports=user; 