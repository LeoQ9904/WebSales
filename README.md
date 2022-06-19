##    PROYECTO: PAGINA WEB PARA LA COMPRA DE PRODUCTOS. 
#### Jorge Leonardo Quintero Quintero
#### cel: 3167285051
#### correo: jquinteroquintero04@gmail.com
#### https://drive.google.com/file/d/1ijq3vtgtjrr6HDFHPcn3AXHp-Nt4a8Uc/view?usp=sharing
***

Proyecto web creado con la finalidad de reforzar conocimientos en las diferentes tecnologías a utilizar, pero también pensado con algún día monetizarlo de alguna manera, por tal razón se  ha tratado de utilizar un modelo de trabajo un tanto globalizado. 

La idea del proyecto la dividí en dos partes principales, la primera, montar todo lo que tiene que ver con el BackEnd y después realizar el FrontEnd.

### BackEnd
El servidor se realizó en entorno Node.js y Express, la estructura principal del servidor es de modelo - controlador con sus respectivos enlaces de rutas, de middleware y como es una API se crea una carpeta pública en la cual se aloja todo el FrontEnd. 
Para alojar los datos cree una base de datos en MongoDB y la conecto por medio de la librería mongoose, para los archivos multimedia se alojaron en Cloudinary, con la finalidad de no recargar el servidor de archivos. 
Como la idea es crear un proyecto que cuente con estándares de seguridad y confianza para el cliente, los datos sensibles, como contraseñas se guardan encriptadas en la DB utilizando la librería Bcrytjs, por otra parte, para que el sistema valide la información del usuario, categoría, rol, si es un usuario válido para realizar las diferentes actividades se hace utilizando los JsonWebTokens con clave única. 

***
### FrontEnd 
La parte visible para el cliente la realice con NuxtJs, y hice la conexión con la API por medio de Axios, trate de utilizar todas las ventajas de VueJs posibles, utilice componentes en diferentes vistas y en diferentes componentes, la reactividad y las variables globales con Vuex.
El diseño se realizó lo más simple posible utilizando colores oscuros y claros tratando de que la página sea lo más neutra posible. Para que el desarrollo de está fuera lo más rápida posible se utilizó Vuetify el cual nos genera componentes, Estilos y Animaciones listas para implementar. 

***
### Próximos pasos: 
 * Habilitar el registro y el inicio de sesión de cualquier correo - usuario
 * Habilitar el registro y el inicio de sesión utilizando google y facebook
 * Habilitar la actualización de datos por parte de cada usuario 
 * Finalizar compra, que el usuario pueda finalizar el pedido solicitado en el carrito de compra. 
 * Descontar productos del stock, cuando el usuario finalice una compra, que el sistema descuente de su stock la totalidad de cada producto. 
 * Poder visualizar disponibilidad de producto, cantidad en stock disponibles para la compra. 

***

### Tecnologías utilizadas en el proyecto. 
 * Node.js
 * MongoDB
 * Cloudinary
 * Express
 * JsonWebToken
 * Bcrytjs
 * Vue.js
 * NuxtJs
 * Vuetify
 * Axios
