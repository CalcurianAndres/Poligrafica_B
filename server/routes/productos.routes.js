const express = require('express');

const Producto = require('../database/models/producto.model');
const Maquina = require('../database/models/maquinas.model');

const app = express();

app.post('/api/nuevo-producto', (req, res)=>{
    let body = req.body;

    const nuevoProducto = new Producto({
        cliente   :body.cliente,
        grupo     :body.grupo,
        producto  :body.producto,
        materiales:body.materiales
    });

    nuevoProducto.save((err, ProductoDB)=>{

        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok:true,
            producto: ProductoDB
        })

    })
})

app.get('/api/productos/:id', (req, res)=>{

    let cliente = req.params.id;


    Producto.find({cliente:cliente}, (err, productosDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }
      res.json({
            productos:productosDB
        })
    })



    // const materialesNecesariosPorProducto = async () => {
    //     const resultado = await Producto.aggregate(
    //         [   
    //             {
    //                 $lookup:
    //                 {
    //                     from:"materials",
    //                     let:{
    //                         aliasNombreMateriales:"$material"
    //                     },
    //                     pipeline:[
    //                         {
    //                             $match:{
    //                                 $expr:{
    //                                     $in:["$name","$$aliasNombreMateriales",]
    //                                 }
    //                             },
    //                         },
    //                         { $sort: { "name": 1 } }
    //                     ],
    //                     as:'materialesNecesarios'
    //                 }
    //             }
    //         ]
    //     )

    //     res.json(resultado);
    // }

    
    // materialesNecesariosPorProducto();


});

app.get('/api/producto/:id', (req, res)=>{

    let id = req.params.id;

    console.log(id)
    Producto.findById(id)
            .populate('grupo')
            .exec((err, productosDB)=>{

            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            Maquina.find({tipo:productosDB.grupo.tipos}, (err, resp)=>{

                res.json({
                    producto:productosDB,
                    maquinas:resp
                })
                
            })


    })

});



module.exports = app;