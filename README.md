# Prueba técnica TuPunto
Este repositorio se creó con el fin de responder a la prueba técnica proporcionada por TuPunto, en la cual se busca crear un pequeño modelo de E-Commerce, con funciones de login, presentación de productos y operaciones CRUD sobre estos mismos. Empleando MongoDB, Mongoose, Express, API-Rest y React.

# Ejecutar el proyecto
## Clonar el proyecto
Para clonar el repositorio, a través de una terminar con Git instalado, ejecute el siguiente comando:
```
git clone https://github.com/LeonardoVNC/evaluacion-leonardo-vacaflor.git
```

## Paquetes Node
El proyecto emplea NPM para administrar las librerias usadas, por lo que para iniciar el proyecto correctamente ejecute los siguientes comandos, iniciando desde el directorio raiz del repositorio:
```
npm i
cd backend
npm i
```
Hecho esto, habrá instalado las librerias para ambas partes del proyecto.

## Variables de entorno
Dentro del directorio raiz del repositorio, cree un archivo `.env` con la siguiente estructura:
```js
REACT_APP_API_URL=`Dirección URL donde se ejecuta el Backend. Ejemplo http://localhost:5000`
```

Dentro de la carpeta `backend` cree otro archivo `.env` con la siguiente estructura:
```js
MONGODB_URI=`Conexión URI a MongoDB`
PORT=`Puerto en el que corre el servicio`
JWT_SECRET=`Cadena secreta de caracteres JWT`
```

## Ejecución del proyecto
### FrontEnd
Para ejecutar el frontend, desde el directorio raiz del repositorio, ejecute el siguiente comando:
```
npm run start
```
Una vez terminado el proceso, en su navegador se abrirá el proyecto.
## BackEnd
Para ejecutar el backend ingrese al directorio `backend` y dentro ejecute el siguiente comando:
```
node server.js
```
Si el backend se ha abierto correctamente, deberia recibir una confirmación en la terminal.

# Login
Para logearse en la página debe crear un usuario desde Postman (para emplear el cifrado de contraseñas). Una vez creado el usuario podrá ingresar a la página con las credenciales que haya seleccionado. Ejemplo:
- Usuario: develop
- Contraseña: develop123