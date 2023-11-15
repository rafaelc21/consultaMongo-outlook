const express = require('express');
const router = express.Router();

const correo = require('../models/correos');

router.get('/',  async (req,res)=>{
    console.log("Esto es get");
    res.render('busqueda');
});


router.post('/',  async (req,res)=>{

    console.log("Esto es post");
    const parametros = JSON.parse(JSON.stringify(req.body)); 
    const palabra  = parametros.busqueda ;  
    //console.log(palabra);
    try {
        const resultados = await correo.find({
          $or: [
            { Cuerpo: { $regex: new RegExp(palabra, 'i') } }, // 'i' para hacer la búsqueda sin distinción entre mayúsculas y minúsculas
            { EnviadoPor: { $regex: new RegExp(palabra, 'i') } },
          ],
        }).sort({ Recibido: -1 });
        console.log(resultados);

        res.render('busqueda',{datos : resultados, busqueda : palabra});

      } catch (error) {
        console.error('Error al realizar la búsqueda:', error);
        res.status(500).send('Error al realizar la búsqueda');
      }
    
    //
});



module.exports = router;