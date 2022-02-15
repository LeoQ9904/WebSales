const path = require('path');
const fs   = require('fs');

const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const { Producto } = require('../models');


const postProducto = async (req,res) =>{
    let {nombre,descripcion,precio,descuento,stock,categoria} = req.body;  
    nombre = nombre.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()); 
    
    const data = {
        nombre,
        descripcion,
        precio,
        descuento,
        stock,
        categoria
        
    }

    const producto = new Producto(data);
    await producto.save();

    res.json({
        info:'Producto creado correctamente',
        producto
    })
}
const getProductos = async (req,res) => {
    const productos = await Producto.find({estado:true})
        .populate('categoria','nombre');
    res.status(200).json({
        info:'Listado de productos',
        productos
    })
}
const putProducto = async (req,res)=>{
    const {id}=req.params;
    let {nombre,descripcion,precio,descuento,stock,categoria,img} = req.body;
    (nombre)?nombre=nombre.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()):nombre
    const data = {
        nombre,
        descripcion,
        precio,
        descuento,
        stock,
        categoria,
        img
    }
    const producto = await Producto.findByIdAndUpdate(id,data);
    res.json({
        info:'Producto editado correctamente',
        producto
    })
}
const deleteProducto = async (req,res)=>{
    const {id} = req.params;
    const producto = await Producto.findByIdAndUpdate(id,{estado:false});
    res.status(200).json({
        info:'Eliminado correctamente',
        producto
    })
}
const putImgProducto = async(req, res = response ) => {

    const { id } = req.params;

    let modelo;
    
    modelo = await Producto.findById(id);   
    try {
        const archivos = req.files.archivo  
        let imgs=[];
        let cn=1;        
        for (let img of archivos) {            
            let { secure_url } = await cloudinary.uploader.upload( img.tempFilePath );             
            imgs.push(secure_url)          
            cn=1+cn;                       
        }        
        modelo.img = imgs;
        await modelo.save();
        res.json( {
            info:'Imagen cargada correcntamete',modelo} );    
        
    } catch (error) {
        console.log('Problemas al cargar el archivo=>',error)
    }

}

module.exports={
    postProducto,
    getProductos,
    putProducto,
    deleteProducto,
    putImgProducto
}