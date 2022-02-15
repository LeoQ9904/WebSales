const bcryptjs = require("bcryptjs");
const { request, response } = require("express")

const { Usuario } = require('../models');


const getUsuario = (req=request,res=response)=>{
}
const getUsuarios = async (req=request,res=response)=>{
    const usuarios = await Usuario.find({estado:true})
    res.json({
        info:'Listado de usuarios',
        usuarios
    })    
}
const postUsuario = async (req=request, res=response)=>{
    let {nombre,correo,contraseña,telefono,direccion} = req.body;
    const data ={
        nombre,
        correo,
        contraseña,
        telefono,
        direccion
    }
    const usuario = new Usuario(data);

    //encriptar contraseña 
    const saltos = bcryptjs.genSaltSync();
    usuario.contraseña = bcryptjs.hashSync(contraseña,saltos);
    try {
        await usuario.save();
        res.json({
            info:'Usuario creado correctamente',
            usuario
        })        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            info:'Problemas en la creción del usuario'
        })
    }
}
const putUsuario = async(req=request,res=response)=>{
    const {id}=req.params;
    let {nombre,correo,contraseña,telefono,direccion} = req.body;
    if(contraseña){
        //encriptar contraseña 
        const saltos = bcryptjs.genSaltSync();
        contraseña = bcryptjs.hashSync(contraseña,saltos);
    }
    const data ={
        nombre,
        correo,
        contraseña,
        telefono,
        direccion
    }
    try {
        let usuario = await Usuario.findByIdAndUpdate(id,data);
        res.json({
            info:'Usuario creado correctamente',
            usuario
        })        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            info:'Problemas en la creción del usuario'
        })
    }
}
const deleteUsuario = async (req=request,res=response)=>{
    const {id} = req.params;

    try {        
        let usuario = await Usuario.findByIdAndUpdate(id,{estado:false})
        res.json({
            info:'Eliminado correctamente',
            usuario
        })
    } catch (error) {
        console.log(error),
        res.status(400).json({
            info:'Problemas al eliminar el usuario'
        })
    }

}
module.exports={
    getUsuario,
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario
}