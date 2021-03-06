
# Human Resources API

## API REST corporativa para gestionar nuestra base de datos de empleados 馃殌

En este proyecto se crear谩 una API para ayudarnos a controlar los registros de los empleados de la empresa en el 谩rea de Recursos Humanos la cual su principal funci贸n es un sistema que les permita realizar la administraci贸n de los empleados (altas, bajas, consultas y cambios) 煤nicamente a ciertos usuarios dados de alta en el sistema. 

La URL base de nuestra API es la siguiente: 

https://recusroshumanos.000webhostapp.com/Interfaz.html

Para poder usar la API solo tendra que ir al link que se mostro anteriormente

De cada usuario registrado se guarda la siguiente informaci贸n:
-	Usuario
-	Email
-	Contrase帽a

De cada empleado se guarda la siguiente informaci贸n:
-	id
-	Nombre
-	Apellidos
-	Tel茅fono
-	Email
-	Direcci贸n


#### 驴C贸mo usar la API?

## Manual de Usuario 馃搵

Entrar al enlace de la Api mostrado anteriormente

Antes de que pueda acceder a la administraci贸n de los empleados tendr谩 que primero logiarse, Si no est谩 logiado entonces no podr谩 acceder a la interfaz. A continuaci贸n, se mostrar谩 algunas de las funciones de la interfaz:

- Primero Inicie sesi贸n si esque la empresa le brindo un usuario y contrase帽a

<img src="Muestra1.png">

- Si la empresa le da acceso a la tabla de los empleados podra registrar un nuevo usuario, esta se encuentra en la parte superior de la intefaz de la API, esto se hizo para que no cualquier persona pueda registrarse en nuestra API.

<img src="Muestra2.png">

Al iniciar en la API de recursos Humanos tendr谩 acceso a la tabla la cual se muestra la lista de empleados que podr谩:
- Agregar empleados a la base de datos. (Bot贸n "Agregar Empleado")
- Modificar datos de los empleados. (Bot贸n "Actualiza Empleado")
- Eliminar empleados en la base de datos. (Bot贸n "Borrar Empleado ")
- Si la empresa te da acceso podr谩s Registrar nuevo usuario. (Bot贸n "Registrar Usuario")

<img src="Muestra3.png">

## Manual de Administrador 鈱笍

La API para la tabla user dispone de 3 m茅todos de petici贸n, que se corresponden en la carpeta routes

- Una llamada GET al "/" devuelve la informaci贸n de todos los usuarios registrados en la base de datos.

<img src="Muestra4.png">

- Una llamada POST "/signin" permite registrar un nuevo usuario en la base de datos. Para poder hacerlo, debes redirigir la ruta en un archivo signin.js, la cual le dar谩 acceso al token y las funciones de repuesta de la API.

<img src="Muestra5.png">

- Una llamada POST "/login" permite logiarse y tener acceso a la interfaz de la administraci贸n de base de datos. Para poder hacerlo, debes redirigir la ruta en un archivo login.js, la cual le dar谩 acceso al token y las funciones de repuesta de la API.

<img src="Muestra6.png">

La API para la tabla empleados dispone de 4 m茅todos de petici贸n, que se corresponden en la carpeta routes

- Una llamada GET al "/" devuelve la informaci贸n de todos los empleados de la base de datos en forma de tabla

<img src="Muestra7.png">

- Una llamada POST '/insert' permite registrar un nuevo empleado en la base de datos. Para poder hacerlo, debes redirigir la ruta en un archivo insert.js, la cual le dar谩 acceso al token y las funciones de repuesta de la API.

<img src="Muestra8.png">

- Una llamada DELETE "/:id([0-9]{1,3})" permite borrar un empleado de la base de datos. Para poder hacerlo, debes redirigir la ruta en un archivo delete.js, la cual le dar谩 acceso al token y las funciones de repuesta de la API.

<img src="Muestra9.png">

- Una llamada PUT al "/:id([0-9]{1,3})" permite editar la informaci贸n de un empleado ya registrado previamente en la base de datos. Para poder hacerlo, debes redirigir la ruta en un archivo update.js, la cual le dar谩 acceso al token y las funciones de repuesta de la API.

<img src="Muestra10.png">

Aqui se muestra la estructura de un archivo json la cual fue referenciada para realizar las rutas correspondientes de la API y que el usuario puede interactuar con dichas funciones: 
```json
"empleados": [{ 
        "id": 1,
        "name": "Luis",
        "last_name": "Montes Moreno",
        "phone": "4426008745",
        "email": "Luis.oz@outlook.com",
        "direction": "Av. de la Luz"

    }
```

#### Servidor API de recursos Humanos

En esta secci贸n se estableceran las rutas, dependencias y middleware la cual el servidor estara en levantamiento y tambien que todo el c贸digo elaborado en la API se redireccione a un unico archivo index.js para que este este funcionando correctamente.

<img src="Muestra11.png">

## Herramientas 馃洜锔?

* [Node.js](https://nodejs.org/es/) - El framework con entorno de ejecuci贸n de JavaScript orientado a eventos  as铆ncronos
* [Heroku](https://www.heroku.com/) - Plataforma como servicio de computaci贸n en la Nube 
* [Clean DB](https://dblp.org/db/conf/cleandb/index.html) - Base de datos en la Nube
* [Posman](https://www.postman.com/) - Plataforma de colaboraci贸n para el desarrollo de API
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Lenguaje de dise帽o gr谩fico 
* [XAMP](https://www.apachefriends.org/es/index.html) - Distribuci贸n de Apache completamente gratuita

## Autores 鉁掞笍

_Todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Marlon Jair Hern谩ndez** - *Backend y Documentaci贸n* - [Marlon20-jar](https://github.com/Marlon20-jar)
* **Daniel Saed Ibarra Maldonado** - *Front-end y Documentaci贸n* - [DanielSaed](https://github.com/DanielSaed)
* **Milton Isa铆 Alvarez Marquez** - *Front-end y Backend* - [Miam043](https://github.com/Miam043)


Si tiene alguna duda al respecto del codigo puede contactar con Daniel Ibarra Maldonado por medio de la red social Facebook: https://www.facebook.com/saed.maldonado.9 
o tambien por [DanielSaed](https://github.com/DanielSaed) 馃槉

