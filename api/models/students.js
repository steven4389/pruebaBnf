'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var studentSchema= Schema({
    ID:String,
    active:Boolean, 
    grades:Array, 
    Name:String, 
    Gender:String, 
    Class:String, 
    Club:String, 
    Persona:String, 
    Crush:String, 
    BreastSize:String, 
    Strength:String, 
    Hairstyle:String, 
    Color:String, 
    Stockings:String, 
    Accessory:String, 
    ScheduleTime:String, 
    ScheduleDestination:String, 
    ScheduleAction:String
});

module.exports = mongoose.model('students',studentSchema);







