const path = require('path');
const fs   = require('fs');

const { request, response } = require("express");
const {Genero} = require('../models');

const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const getGenero = async (req=request,res=response) =>{
    const generos = await Genero.find({status:true})
    res.json({
        info:'Listado de generos',
        generos
    });

}
const postGenero = async (req,res)=>{
    let {nombre,descripcion} = req.body;
    nombre = nombre.toUpperCase();
    let img;
    if(req.files){
        let logo = req.files.logo;
        let { secure_url } = await cloudinary.uploader.upload( logo.tempFilePath );             
        img=secure_url;
    } 
    data = {
        nombre,img,descripcion
    }

    const genero = await Genero(data);
    genero.save();

    res.json({
        info:'Genero creado correctamente',
        genero
    })

}

const putGenero = async (req,res)=>{

    //tarea pendiente::: eliminar logo cargado anterioremente 
    const {id} = req.params;
    let {nombre,descripcion} = req.body;
    try {
        
    
    if(nombre) nombre = nombre.toUpperCase()
    let img;
    if(req.files){
        let logo = req.files.logo;
        let { secure_url } = await cloudinary.uploader.upload( logo.tempFilePath );             
        img=secure_url;
    } 
    data={
        nombre,
        img,
        descripcion
    }

    const genero = await Genero.findByIdAndUpdate(id,data);

    res.json({
        info:'Genero actualizado correctamente',
        genero
    })
    } catch (error) {
        console.log(error)        
    }

}

const deleteGenero = async (req,res) =>{
    const {id} = req.params;

    const genero = await Genero.findByIdAndUpdate(id,{status:false})

    res.json({
        info:'Genero deshabilitado correctamente',
        genero
    })
}

module.exports={
    getGenero,
    postGenero,
    deleteGenero,
    putGenero
}