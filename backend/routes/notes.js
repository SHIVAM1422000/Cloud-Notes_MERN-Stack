const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser=require('../middleware/fetchuser');
const Notes= require('../models/Notes');




// ROUTE 1: Create a User using: POST "/api/notes/addnotes".  login required
// ============================================================================================

router.post('/addnotes',fetchuser,[
    body('title','Title must be 3 chars long').isLength({min:3}),
    body('description','Desc Must Be Min 3 Charactters Long').isLength({min:3})
],async (req,res)=>{
   
    //   If there are errors, return Bad request and the errors

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
 

   const notes=await Notes.create({
    title: req.body.title,
    description: req.body.description,
    tag:req.body.tag,
    user:req.user.id,
  });


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

  








module.exports=router;


