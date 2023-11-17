const express = require('express');
const path = require('path');


const productRoute=require('./routes/product-router');
const userRoute=require('./routes/user-router');

const app=express();


app.set('port',process.env.PORT || 3002);
//console.log(app.get('port'));

app.use(express.urlencoded());
app.use('/public/css', express.static(path.join(__dirname, 'public', 'resources', 'css')));

//using router
app.use('/products', productRoute);
app.use(userRoute);

//all urls match 
app.use(function(req, res, next) {
    console.log('all url matchs...');
    res.end('Hi....!!!');
});


//req wrong url
app.use('/test', (req, res, next) => {
    throw new Error('Wrong URL!');
})

//error handling
app.use((req, res, next) => {
    res.status(404).send('404 PAGE NOT FOUND!');
});

app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error!');
});

app.listen(app.get('port'),()=>console.log(`listening on ${app.get('port')}`));