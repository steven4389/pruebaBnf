'use strict'

var mongoose = require('mongoose');
var app= require('./app');
var port= 3000;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/bnf', { useNewUrlParser: true })
        .then(()=>{
            console.log("connection full");
            //servidor
            app.listen(port, ()=>{
                console.log("servidor corriendo");
            });

        }).catch(err=> console.log(err));



