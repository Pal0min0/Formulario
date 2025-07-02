/*var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const mongoose=require('mongoose');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./Web'));

const conect = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/Productos')
conect.once('open',()=>{
    console.log("Okay")
})
conect.on('error',(error)=>{
    console.log("Pailas")
})

const productosShema=new mongoose.Schema({
    producto:String,
    cantidad:Number,
    precio:Number,
    direccion:String,
    fecha:Date,
})

const Productos=mongoose.model('Productos', productosShema)

app.post('/crear', async (req, res)=>{
    try{
        const nuevoP=new Productos({
            producto:req.body.Product,
            cantidad:req.body.Cant,
            precio:req.body.Precio,
            direccion:req.body.Dir,
            fecha:req.body.Fecha
        })
        await nuevoP.save()
        res.status(201).send("Productos Guardados")
    }
    catch(error){
        console.error(error)
        res.status(500).send("Error: ", error)
    }
})

app.get("/leer", async (req, res)=>{
    try{
        const productos=await Productos.find()
        res.json(productos)
    }
    catch(error){
        console.error(error)
        res.status(500).send("Error: ", error)
    }
})
app.put('/actualizar/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const productoActualizado=await productos.findByIdAndUpdate(
            id,{
            producto:req.body.product,
            cantidad:req.body.cantidad,
            precio:req.body.precio,
            direccion:req.body.direccion,
            fecha:req.body.fecha
            },  
            {new:true}
        )
        if(!productoActualizado){
            return res.status(404).send("Producto no encontrado")
        }
        else{
            res.status(201).send("producto actualizado")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Error: ", error)
    }
})
app.listen(3000, ()=>{
    console.log("Servidor ok")
})*/