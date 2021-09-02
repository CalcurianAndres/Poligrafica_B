const express = require('express');
const app = express();

const Gestion = require('../database/models/gestiones.model')

app.post('/api/gestiones', (req,res)=>{
    const body = req.body;

    const NuevaGestion = new Gestion({
        fecha:body.fecha,
        hojas:body.hojas,
        maquina:body.maquina,
        orden:body.orden,
        productos:body.productos,
        Rproductos:body.Rproductos,
        Rhojas:body.Rhojas
    });

    NuevaGestion.save((err, gestionDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(gestionDB);
    })
});

app.get('/api/gestiones', (req, res)=>{


    // --CONSULTA A LA COLECCION DE GRUPOS--
    Gestion.find()
            .populate('maquina')
            .exec((err, gestionDB)=>{

        // --EN CASO DE ERROR--
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSRAR LOS GRUPOS--
        res.json(gestionDB)

    })

});


module.exports = app;