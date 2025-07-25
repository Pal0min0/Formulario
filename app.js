var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./Web'));

const conect = mongoose.connection;
mongoose.connect('mongodb+srv://palomo:12_78@cluster0.gpczalv.mongodb.net/')
conect.once('open',()=>{
    console.log("Conexión a MongoDB exitosa")
})
conect.on('error',(error)=>{
    console.log("Error de conexión:", error)
})

const productosShema = new mongoose.Schema({
    producto: String,
    cantidad: Number,
    precio: Number,
    direccion: String,
    fecha: Date,
})

const Productos = mongoose.model('Productos', productosShema)

// Crear producto
app.post('/crear', async (req, res)=>{
    try{
        const nuevoP = new Productos({
            producto: req.body.Product,
            cantidad: req.body.Cant,
            precio: req.body.Precio,
            direccion: req.body.Dir,
            fecha: req.body.Fecha
        })
        await nuevoP.save()
        res.status(201).send("Producto Guardado")
    }
    catch(error){
        console.error(error)
        res.status(500).send("Error al guardar producto")
    }
})

// Leer productos
app.get("/leer", async (req, res)=>{
    try{
        const productos = await Productos.find()
        res.json(productos)
    }
    catch(error){
        console.error(error)
        res.status(500).send("Error al leer productos")
    }
})

// Actualizar producto
app.put('/actualizar/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const productoActualizado = await Productos.findByIdAndUpdate(
            id, {
                producto: req.body.Product,
                cantidad: req.body.Cant,
                precio: req.body.Precio,
                direccion: req.body.Dir,
                fecha: req.body.Fecha
            },  
            {new: true}
        )
        if(!productoActualizado){
            return res.status(404).send("Producto no encontrado")
        }
        else{
            res.status(200).send("Producto actualizado correctamente")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Error al actualizar producto")
    }
})

// Eliminar producto
app.delete('/eliminar/:id', async (req, res) => {
    try{
        const {id} = req.params
        const productoEliminado = await Productos.findByIdAndDelete(id)

        if(!productoEliminado){
            return res.status(404).send("Producto no encontrado")
        }
        else{
            res.status(200).send("Producto eliminado correctamente")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Error al eliminar producto")
    }
})

app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000")
})