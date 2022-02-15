####    PROYECTO: Web Sales. 

# Esta es la parte del backend.

¡¡Pasos!!

1. Crear crud para producto, categoria, usuario, canasta, venta.
    1.1. categoria:
            Contiene el #nombre el cual debe que pasar por oblicatorio, y debe que guardarse con la primera letra en mayuscula y debe contener no mas de 15 caracteres. 
            Contine el #descripcion, debe que ser obligatorio pero no contiene mayor restrinción
            #estado, es booleano, por defaul true para saber que no se ha eliminado.            
    1.2. producto:
            Es derivado de categoria, se debe que crear primero las categorias para que los productos puedan existir. 
            #nombre es obligaotrio, no debe que contener más de 30 caracteres.
            #descripcion es obligatoria, no tiene mayor restricción.
            #precio no es obligatorio, se imprime por default 0. 
            #stock no es obligatorio, se imprime por default 0.
            #img es un string, el cual muestra la dirección donde se va a almacenar, las imagenes se van a almacenar en cloudinary. 
            #estado, es booleano, por defaul true para saber que no se ha eliminado.
            $descunto no es obligatorio, se imprime por default 0.
            $impuestos no es obligatorio, se imprime por default 0.
    1.3. usuario: 
            #nombre de typo string, se aloja el nombre completo del usurio.
            #correo de typo String, se valida por medio de express-validator si es email, es        obligatorio y unico entro los usuarios
            #telefono es obligatorio y unico entre los usurios, de typo string. 
            #estado, es booleano, por defaul true para saber que no se ha eliminado.
            #rol es de typo Strign, por default todos son USUARIO_ROL
    1.4 canasta:
            Esta aloja la selección que realice el usuario, cuando el usuario decida realizar la compra, se elimina de db cualquier registro del usario en esta tabla.  
            #usuarioID de typo Schema.type.ObjectId, para relacionar al usuario que lecciono el procuto.
            #productoID un objeto que contiene objetos con id de productos y cantidad de producto
            #cantidad de typo Number, para saber cuantas cantidades selecciono el usuario, por defaul se crea con 1 unidad, pero esta cantidad no debe que ser superior a la que se tiene en el stock del producto.  
    1.5 venta:
            Esto refleja las ventas que se han realizado, cuando el usuario realice una compra,serefleja una nueva venta, el usuario al realizar esta acción, los prouctos que se carguen a este venta se les debe que descontar la cantidad del estock. 
            #usuarioID de typo Schema.type.ObjectId, para relacionar al usuario que lecciono el #productoID un objeto que contiene objetos con id de productos y cantidad de producto

            
2. Realizar control de acceso, resticciones para la creación de: producto, categoria
    Los usuarios de rol ADMIN_ROL son los que pueden realizar estas peticiones, seria para obsolutamente todo, menos para la consulta de productos, y añadir los productos a la canasta y la realización de la compra. Estas acciónes las debe que realiar un usuario verificado por medio de un token de JWK. 

    Realizar la implementación de middlewares para la autenticación, la validacion tambien se realiza por medio de check, y con funciones propias pasadas por costum. 

3. Hacer cargo de información a la base de datos. 


4. Habilitar las consultas, se debe que poder consultar productos por categoria y o nombre.  

5. Hacer login de usuario. 

6. Implementar la cominicación de client - server medianto los sockets, con el fin de tener una comunicación más interactiva con el usuario. 


#   Objetivos

Saber cuando parar: 
    la idea es tener una plataforma para mostrar, realizar el trabajo hasta completar el proceso de la compra de los productos. 