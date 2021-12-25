const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Mero Vrindavan"); 
    console.log("Sent from route/auth");
});

module.exports=router;