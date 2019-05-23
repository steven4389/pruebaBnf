'use strict'
var express= require('express');
var studentsController= require('../controllers/studentController');


var router= express.Router();

//insumos
router.get('/students', studentsController.obtener);

module.exports= router;