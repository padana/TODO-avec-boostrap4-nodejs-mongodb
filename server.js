const express = require('express')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000



//CONNECTION


mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('je suis connecté DB');
  
});

 

// create application/x-www-form-urlencoded parser


app.set('view engine', 'ejs')


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(bodyParser.json())



const getIndexRoure = require('./routes/index')
app.use('/', getIndexRoure)


app.listen(port, () =>{
    console.log('mon port marche bien: ', port);
    
})