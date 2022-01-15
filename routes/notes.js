const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser=require('../middleware/fetchuser');
const Notes= require('../models/Notes');


// Field 1 - user Name (Validation: No spaces | Only alphanumeric characters)
// Filed 2 - Mobile Number (Validation: Only 10 digit number)
// Field 3 - Email (Validation: Normal email validation)
// Field 4 - Address



// ROUTE 1: Create a User using: POST "/api/notes/addnotes".  login required
// ============================================================================================

//fetch user is a middle ware that verifies the user token brofre sending the data
router.post('/addnotes',fetchuser,[
    body('userName','User Name must be alphanumeric and with no spaces').isAlphanumeric(),
    body('mobileNumber','Mobile number must be 10 digits long').isLength({min:10}),
    body('mobileNumber','Mobile number must be 10 digits long').isLength({max:10}),
    body('email','Please enter a valid email syntax').isEmail(),
],async (req,res)=>{
   

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("Error in ading user data");
        console.log("Worng Syntax");
        return res.status(400).json({ allErrors:errors });
      }
 

      // userName:{type:String , required:true},
      // mobileNumber:{type: Number,required:true},
      // email:{type:String , required:true},
      // address:{type:String},
      // user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},

   const notes=await Notes.create({
    userName: req.body.userName,
    mobileNumber: req.body.mobileNumber,
    email:req.body.email,
    address:req.body.address,
    user:req.user.id,
  });

console.log("Note Added Successfully");
  res.send(notes);



});




// ROUTE 2: Fetch All Notes of a User using: POST "/api/notes/fetchnotes".  login required
// ============================================================================================

router.get('/fetchnotes',fetchuser,async (req,res)=>{

    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


});




/**

// ROUTE 3:   Update a note using PUT  "/api/notes/update/:id".  login required
// ============================================================================================

router.put('/update/:id',fetchuser,async (req,res)=>{

    const { title, description, tag } = req.body;
   
    
    try{

        //make new note
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };
        

          console.log(newNote);

           //get the preexisting note from the data base
           //req.params.id will contain the id of the note that needs to be updated
           let note=await Notes.findById(req.params.id);

           console.log("Note Found");
        
           //if note isn't found then we  send status code error
           if (!note) { return res.status(404).send("Not Found") }
        
           console.log("Id authenticated");

           //if someone tries to tamer the data 
           //we will check that the user id that is in the notes matches with the user id we'll get from the logged in user token
           if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
          }
         
        //if everything is okay then
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
                res.json({ note });
            } 
            catch (error) {
                console.error(error.message);
                res.status(500).send("Internal Server Error");
            }


     


});

  


// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/delete/:id', fetchuser, async (req, res) => {
  try {
      // Find the note to be delete and delete it
      let note = await Notes.findById(req.params.id);
      if (!note) { return res.status(404).send("Not Found") }

      // Allow deletion only if user owns this Note
      if (note.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }

      note = await Notes.findByIdAndDelete(req.params.id)
      res.json({ "Success": "Note has been deleted", note: note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

*/



module.exports=router;


