// conexión a la base de datos. 
const mongoose = require('mongoose');

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGODBWEBSALES,{
            //averiguar para que funciona -->>
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Estamos conectados a la base de datos --->')
    } catch (error) {
        console.log(error);
        throw new Error('Tenemos un error a la hora de conecctar la base de datos <<<====')
    }
}


module.exports={dbConnection};