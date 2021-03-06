const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const rp = require('request-promise')
const buscadormod= require('../Modelo/Buscador')
const cors = require('cors');

const buscador= new buscadormod()

router.use(function(req, res, next) {
    console.log('Recibido');
    next();
});



app.use(function(err, req, res, next) {
    next();
    if (err){
        throw new Error (400, "Bad request")
    }
  });

app.use('/api', router);
// app.use(cors());

router.route('/sitio/:id_sitio/categorias').get (function (req,res){
    buscador.setearFiltro(req.params.id_sitio)
    buscador.obtenerResultados().then(()=>{
            res.json({
                "pais":buscador.sitioSeleccionado(),
                "categorias": buscador.categorias
            })
        })
    
        .catch((error)=>{
                res.json( error);
            })
    })

    router.route('/sitio/:id_sitio/:id_categoria/productos').get (function (req,res){
        buscador.setearFiltro(req.params.id_sitio)
        buscador.setearFiltroDeCategoria(req.params.id_categoria)
        buscador.obtenerResultados().then(()=>{
                
            buscador.obtenerProductosRequeridos().then((productos)=>{
                    res.json(productos)
                })
            })
            .catch((error)=>{
                let _err= new Error ('No hay productos aun, vuelva a intentar nuevamente mas adelante')
                throw _err
                res.status(404)
                res.json({errorCode: _err.message})
            })            
    })

    router.route('/sitios').get( function (req,res){
        buscador.obtenerSitios().then((sitios)=>{
            res.json(sitios)
        })
        .catch((error)=>{
            res.json({status: 500, errorCode: 'Upss! Algo fallo, intente nuevamente mas tarde'});
        })
    })

router.use((req, res) => {
    res.status(404);
    res.json({status: 404, errorCode: 'Pedido incorrecto'});
});

app.listen(port);

console.log('Iniciando servidor en el puerto ' +port);