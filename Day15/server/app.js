const express = require('express');

//call router

const bookRouter=require('./routes/book-router');


const app = express();
app.use(express.json());//json

//go to route
app.use('/books',bookRouter);


//server error
app.use((err, req, res, next)=>{
    res.status(500).send(`Server Error ${err.message}`);
})

app.listen(3000, () => {
    console.log('listen on 3000');
})