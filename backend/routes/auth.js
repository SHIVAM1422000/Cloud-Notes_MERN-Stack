const express = require('express');
const router = express.Router();
const User= require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const JWT_Secret="RadhaBallabhSriHarivansh``````";


// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/create_user',[
    body('name',"wrong").isLength({ min: 3 }),
    body('email',"wrong").isEmail(),
    body('password',"wrong").isLength({ min: 5 })
],async (req,res)=>{
   // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        // Check whether the user with this email exists already     
      let newUser=await User.findOne({email:req.body.email});
      if(newUser){
        return res.status(400).json({ error: "Sorry a user with this email already exists" });
      }
      
      //Password salting and hashing
      const salt=await bcrypt.genSalt(10);
      const secPass=await bcrypt.hash(req.body.password,salt);

   // Create a new user
     newUser=await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

     //json web token
     var jwt = require('jsonwebtoken');
     var token = jwt.sign({ id: newUser.id }, JWT_Secret);
     console.log("User Id: "+ newUser.id);
     console.log(token);


    res.json(newUser);

  }catch(error){
 
    console.log(error.message);
    res.status(500).send("Internal Server Error");

  }


    console.log(req.body); 
    // res.send(req.body); 
});



module.exports=router;