const express = require('express');
const Grupo = require('../database/models/grupos.model');


const app = express();

app.get('/api/grupos', (req, res)=>{


    // --CONSULTA A LA COLECCION DE GRUPOS--
    Grupo.find((err, gruposBD)=>{

        // --EN CASO DE ERROR--
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSRAR LOS GRUPOS--
        res.json({
            grupos:gruposBD
        })

    })

});

app.post('/api/grupos', (req, res)=>{

    // --SE ACORTA EL REQUEST--
    let body = req.body;

// ----SE VACIA EL BODY EN UNA NUEVA CLASE DEL MODELO---
    const NewGrupo = new Grupo({
        nombre: body.nombre,
        tipos:body.tipos
    })

    console.log('Esto llega:',body)
    console.log('Esto se va:',NewGrupo)

// ----SE GUARDA LA INFORMACION EN LA BASE DE DATOS---
    NewGrupo.save((err, grupoDB)=>{

        // --EN CASO DE ERROR--
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSTRAR NUEVA MAQUINA AÑADIDA--
        res.json({
            NuevoGrupo:grupoDB
        });

    });

});

module.exports = app;