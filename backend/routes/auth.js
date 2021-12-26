const express = require('express');
const router = express.Router();
const User= require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('name',"wrong").isLength({ min: 3 }),
    body('email',"wrong").isEmail(),
    body('password',"wrong").isLength({ min: 5 })
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user))
    .catch(err=>console.log(err));

    console.log(req.body); 
    // res.send(req.body); 
});



module.exports=router;