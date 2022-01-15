const mongoose=require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({

  //here we link the user id with the  notes id to get all the data related to an user at a place
  //reference is same as of the name of the User model in the export line ie: line 11 of models/user.js
  
  userName:{type:String , required:true},
  mobileNumber:{type: Number,required:true},
  email:{type:String , required:true},
  address:{type:String},
  user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
});

module.exports = mongoose.model('notes', NotesSchema);

// Field 1 - username (Validation: No spaces | Only alphanumeric characters)
// Filed 2 - Mobile Number (Validation: Only 10 digit number)
// Field 3 - Email (Validation: Normal email validation)
// Field 4 - Address