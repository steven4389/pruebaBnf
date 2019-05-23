'use strict'

var students = require('../models/students');

var controller={

    

    obtener: function(req, res){
       
        students.find({})
              .exec((err, Students)=> {
                    if(err) return res.status(500).send({message: 'error al devolver los datos'});
                    if(!Students) return res.status(404).send({message:'No hay insumos'});
                    
                    return res.status(200).send({Students});
                });
    },


};

module.exports = controller;
