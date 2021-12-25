const express = require('express');
const router = express.Router();
const User= require('../models/User');


router.post('/',(req,res)=>{
    res.send(req.body); 
    console.log(req.body);
    // console.log("Sent from route/auth");
});

module.exports=router;