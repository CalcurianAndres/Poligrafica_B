const express = require('express');
const Bobina = require('../database/models/bobinas.model');


const app = express();

app.post('/api/bobina', (req, res)=>{

    const body = req.body;

    const NewBobina = new Bobina({
        Nbobina:body.Nbobina,
        material:body.material,
        gramaje:body.gramaje,
        ancho:body.ancho,
        peso:body.peso
    })

    NewBobina.save((err, bobina)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSTRAR NUEVA MAQUINA AÑADIDA--
        res.json(bobina);
    });

});

app.get('/api/bobina', (req, res)=>{

    Bobina.find((err, bobina)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSTRAR NUEVA MAQUINA AÑADIDA--
        res.json(bobina);
    });

});

module.exports = app;