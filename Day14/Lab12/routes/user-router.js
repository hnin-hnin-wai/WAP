const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'user.html'));
});

router.post('/user',(req,res,next)=>{
    console.log("url...USERS save Info");
    //res.send("Save USER Name & PWD");
    res.send(`${req.body.username}, ${req.body.pwd}`);

})

module.exports = router;