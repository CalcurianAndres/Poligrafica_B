const express = require('express');

const Material = require('../database/models/material.model');
const Materia = require('../database/models/mp.model');
const Sustrato = require('../database/models/sustrato.model');

const app = express();

//VER TODOS LOS MATERIALES EXISTENTES
app.get('/api/tipo-materia-prima', (req, res)=>{
    Materia.find((err, Grupos)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(Grupos);
    });
});


app.get('/api/materiales', (req, res)=>{
    
    Material.find()
            .populate('grupo')
            .sort('grupo.nombre')
            .exec((err, materialesDB)=>{
                
                if( err ){
                    return res.status(400).json({
                        ok:false,
                        err
                    });
                }

                res.json({
                    ok:true,
                    materiales:materialesDB
                })
            })

});

//AGREGAR NUEVO MATERIAL
app.post('/api/nuevo-material', async (req, res)=>{
    
    let body = req.body;
    let ready = false;

    function definirGrupo(){
        return new Promise(resolve =>{
            if(body.nuevo){
                let NuevoGrupo = new Materia({
                    nombre:body.grupo
                })
            
                NuevoGrupo.save((err, grupoDB)=>{
        
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }
        
                    body.grupo = grupoDB._id;
                    resolve(body.grupo)
                })
            }else{
                if(body.grupo == 'sustrato'){
                    let newSustrato = new Sustrato({
                        cantidad:body.cantidad,
                        material:body.producto
                    }).save((err, sustrato)=>{
                        if( err ){
                            return res.status(400).json({
                                ok:false,
                                err
                            });
                        }

                        return res.json(sustrato);
                    })
                }else{
                    resolve(body.grupo)
                }
            }
        })
    }



    const material = new Material({
        grupo:await definirGrupo(),
        nombre:body.producto,
        cantidad:body.cantidad,
        unidad:body.unidad
    });

    material.save((err, materialDB) => {

        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok:true,
            material: materialDB
        })

    });

});

//MODIFICAR UN MATERIAL
app.put('/api/material/:id', (req, res)=>{

    const id = req.params.id;
    let body = req.body;

    Material.findById(id, (err, materialDB) =>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        if(body.name === ""){
            body.name= materialDB.name
        }
        if(body.cantidad === ""){
            body.cantidad = materialDB.cantidad
        }


    })


    Material.findByIdAndUpdate(id, {name:body.name, cantidad:body.cantidad},{ new:true}, (err, modificacion)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok:true,
            material: modificacion
        })

    })

})

//ELIMINAR MATERIAL
app.delete('/api/material/:id', (req, res)=>{

    const id = req.params.id;

    Material.findByIdAndUpdate(id, {activo:false}, (err, modificacion)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok:true,
            material: modificacion
        })
    })
})


module.exports = app;