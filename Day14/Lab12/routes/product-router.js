const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/add', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'product.html'));
});

router.post('/product', (req, res) => {
    console.log("url...product save");
    res.send(`${req.body.title}, ${req.body.price},${req.body.remark}`);
});

/* router.get('/view',(req,res,next)=>{
    console.log("url...PRODUCTS");
    res.send("View PRODUCT");
}) */


module.exports = router;