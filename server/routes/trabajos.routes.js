const express = require('express');
const Trabajo = require('../database/models/trabajos.model');


const app = express();

app.get('/api/trabajos/:id', (req, res)=>{

    let id = req.params.id;

    Trabajo.find({maquina:id})
            .populate('maquina')
            .exec((err, trabajoDB)=>{
     if( err ){
          return res.status(400).json({
             ok:false,
             err
             });
         }
         

         res.json({
             trabajo:trabajoDB
         })
    })




    // // --CONSULTA A LA COLECCION DE GRUPOS--
    // Grupo.find((err, gruposBD)=>{

    //     // --EN CASO DE ERROR--
    //     if( err ){
    //         return res.status(400).json({
    //             ok:false,
    //             err
    //         });
    //     }

    //     // --MOSRAR LOS GRUPOS--
    //     res.json({
    //         grupos:gruposBD
    //     })

    // })

});

app.post('/api/trabajos', (req, res)=>{
    // maquina:{
    //     type:Schema.Types.ObjectId,
    //     ref: 'maquina'
    // },
    // fecha:{
    //     type:String,
    // },
    // OrdenProduccion :{
    //     type:Schema.Types.ObjectId,
    //     ref: 'op'
    // },

    const body = req.body;

    const NewOrden = new Trabajo({
        maquina:body.maquina,
        fecha:body.fecha,
        OrdenProduccion:body.orden
    })

    NewOrden.save((err, maquinas)=>{

        // --EN CASO DE ERROR--
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSTRAR NUEVA MAQUINA AÑADIDA--
        res.json({
            maquinas:maquinas
        });

    });


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