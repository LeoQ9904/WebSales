const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config');
const fileUpload = require('express-fileupload');

class server {   

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.rutas= {
            usuario:'/api/usuario',
            categoria: '/api/categoria',
            canasta: '/api/canasta',
            producto: '/api/producto',
            auth: '/api/auth'
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
        this.app.use(this.rutas.usuario, require('../routes/usuario'));
        this.app.use(this.rutas.categoria, require('../routes/categoria'));
        this.app.use(this.rutas.canasta, require('../routes/canasta'));
        this.app.use(this.rutas.producto, require('../routes/producto'));
        this.app.use(this.rutas.auth, require('../routes/auth'));
    }

    listen(){
        this.app.listen(this.port)
    }

}

module.exports = server;