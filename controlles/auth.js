const bcrypt = require('bcryptjs');
const {Usuario} = require('../models');
const {generarJWT}=require('../helpers/generar-jwt');

const login = async(req,res)=>{

    const {correo,contrasena} = req.body;

    try {
        const usuario = await Usuario.findOne({correo});
        if(!usuario){
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - correo'
            });
        }
        if(!usuario.estado ){ //es como si poniera usuario.status === false
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - estado'
            });
        }
        const validContrasena = bcrypt.compareSync(contrasena, usuario.contraseña);
        if(!validContrasena){
            return res.status(400).json({
                info:'Datos incorrectos'
            })
        }
        
        //generar token para la validacion de la informacion del usuario

        const token = await generarJWT(usuario.id);

        res.json({
            info:'Login correcto',
            usuario,
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            info:'Problemas, hbale con el administrador'
        })
    }
}

const renovarToken = async (req,res) =>{
    const {usuario} = req;
     //generar token para la validacion de la informacion del usuario

     const token = await generarJWT(usuario.id);
    res.json({
        usuario,
        token
    });
}

module.exports={
    login,
    renovarToken
}