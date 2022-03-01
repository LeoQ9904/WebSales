const path = require('path');
const fs   = require('fs');

const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const { Producto, Genero, Categoria } = require('../models');
const { request } = require('http');


const postProducto = async (req,res) =>{
    let {nombre,descripcion,precio,descuento,talla,categoria,genero,tipo,color} = req.body;  
    nombre = nombre.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()); 
    
    const data = {
        nombre,
        descripcion,
        precio,
        descuento,
        talla,
        categoria,
        genero,
        tipo,
        color
    }

    const producto = new Producto(data);
    await producto.save();

    res.json({
        info:'Producto creado correctamente',
        producto
    })
}
const getProductos = async (req,res) => {
    // tipo = a si la consulta toma todos los datos lo desea realizar filtros
    //tipo = filtro, no hacer consulta con filtros, all de lo contrario
    let {genero}=req.params;    
    let cate = req.query.cate;

    console.log(req.query)

    let productos = []
    let productosprev = await Producto.find({estado:true})
        .populate('genero','nombre')   
        .populate('categoria','nombre');
        productos = productosprev;
    switch (genero) {
        case 'all':            
            break;        
        default:
            productos=[];
            productosprev.forEach(produc => {
                if(produc.genero.nombre == genero){
                    productos.push(produc)
                }
            });    
            productosprev = [];
            productosprev = productos;                  
            break;
    }    
    switch (cate) {
        case 'all':            
            break;        
        default:
            productos = []
            productosprev.forEach(produc => {
                if(produc.categoria.nombre == cate){
                    productos.push(produc)
                }
            });                 
            break;
    }
    res.status(200).json({
        info:'Listado de productos',
        productos
    })
}
const putProducto = async (req,res)=>{
    const {id}=req.params;
    let {nombre,descripcion,precio,descuento,stock,categoria,img,genero} = req.body;
    (nombre)?nombre=nombre.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()):nombre
    const data = {
        nombre,
        descripcion,
        precio,
        descuento,
        stock,
        categoria,
        img,
        genero
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