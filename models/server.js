const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config');
const fileUpload = require('express-fileupload');

class server {   

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.rutas= {
            auth: '/api/auth',
            categoria: '/api/categoria',
            canasta: '/api/canasta',
            genero: '/api/genero',
            producto: '/api/producto',
            usuario:'/api/usuario',
            getdatos:'/api/getdatos',
        }

        this.coneccionDB();

        this.middlewares();

        this.routes();

    }   
    async coneccionDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use( express.json() );
        this.app.use( express.static('public'));//pagina que se va a mostrar en html

        //muy importante para que el sistema pueda subir archivos, npm i express-fileupload
        this.app.use ( fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/'
        }));
    }

    routes(){
        this.app.use(this.rutas.auth, require('../routes/auth'));
        this.app.use(this.rutas.categoria, require('../routes/categoria'));
        this.app.use(this.rutas.canasta, require('../routes/canasta'));
        this.app.use(this.rutas.genero, require('../routes/genero'));
        this.app.use(this.rutas.producto, require('../routes/producto'));
        this.app.use(this.rutas.usuario, require('../routes/usuario'));
        this.app.use(this.rutas.getdatos, require('../routes/getDatos'));
    }

    listen(){
        this.app.listen(this.port)
    }

}

module.exports = server;